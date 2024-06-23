const express= require("express")
const router= express.Router();
const zod= require("zod")
const{JWT_SECRET}= require("../config")
const jwt= require("jsonwebtoken")


const userMiddleware=require("../middlewares/user");
const { User, Course } = require("../db/db");

const SignupBody=zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    password:zod.string().min(8)
})

router.post("/signup",async (req,res)=>{
    const {success}= SignupBody.safeParse(req.body)

    if(!success){
        return res.status(403).json({
            msg:"Incoreect inputs"

        })
    }
    
    const userExists = await User.findOne({
        username:req.body.username,
    })

    if(userExists){
        return res.status(403).json({
            msg:"username already taken"
        })
    }

     const user = await User.create({
        username:req.body.username,
        firstName:req.body.firstName,        
        password:req.body.password
    })

    const userId= user._id;


    const token= jwt.sign({
        userId
    },JWT_SECRET)

    res.json({
        msg:"User created successfully",
        token
    })
})


const signinBody= zod.object({
    username:zod.string().email(),
    password:zod.string().min(8)

})

router.post("/signin",async (req,res)=>{
    const {success}= signinBody.safeParse(req.body);


    if(!success){
        return res.json({
            msg:"Incorrect username or password "
        })
    }

    const user = User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    if(user){
      const token=jwt.sign({
            userId:user._id
        },JWT_SECRET)

        res.json({
            token:token
        })

    }

   
})


router.get("/courses",userMiddleware,async (req,res)=>{

    const filter= req.query.filter || "" ;

    const getCourses= await Course.find({
        title:{
            "$regex":filter

        }
    })

    console.log(getCourses)

    res.json({
        courses:getCourses.map(courses=>({
            title: courses.title,
            price: courses.price,
            description: courses.description,
            imageLink: courses.imageLink,
            id:courses._id
        }))
    })
    
    
})

router.post("/courses/:courseId",async (req,res)=>{
    const courseId= req.params.courseId;
    const username= req.headers.username;

     await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })

    res.status(400).json({
        msg:"Course purchases successfully"
    })
})


router.get("/purchasedCourses",async(req,res)=>{

    const user= await User.findOne({
         username:req.headers.username,
    })

    const courses= await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses:courses
    })
});

module.exports=router;