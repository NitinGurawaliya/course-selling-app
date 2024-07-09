const express= require("express")
const router= express.Router();
const zod = require("zod")
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")


const adminMiddleware=require("../middlewares/admin");
const { Admin, Course, User} = require("../db/db");


const signupBody= zod.object({
    username:zod.string(),
    password:zod.string().min(8),
    email:zod.string().email()
})

router.post("/signup",async (req,res)=>{
    const {success} = signupBody.safeParse(req.body)

    if(!success){
        res.status(403).json({
            msg:"Incorrect inputs"
        })
    }

    const AdminExists= await Admin.findOne({
        username:req.body.username,
    })

    if(AdminExists){
        return res.status(403).json({
            msg:"Admin already exists"
        })
    }
    

     const admin = await Admin.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email

    })

    const adminId= admin._id;

 

    const token= jwt.sign({
        adminId
    },JWT_SECRET)

    res.json({
        msg:"Admin created successfully",
        token:token
    })
})



const signinBody= zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
})

router.post("/signin",async (req,res)=>{

    const {success} = signinBody.safeParse(req.body);

    if(! success){
        res.status(403).json({
            msg:"Incorrect inputs "
        })
    }

    const admin = await Admin.findOne({
        email:req.body.email
    })

    if(admin){
        const token= jwt.sign({
            adminId:admin._id
        },JWT_SECRET)

        res.json({
            msg:"Sign in successful ",
            token
        })
    }
})



router.post("/courses",adminMiddleware, async (req,res)=>{   
    /// When admin is creating the course the course has to be added in the course table and a rafrence or the course id has to be added in its createdcourses array 
    // And that array can be accessed to get all craeted courses and to update any changes 
    const title=req.body.title;
    const description = req.body.description;
    const price=req.body.price;
    const imageLink= req.body.imageLink;

    const username= req.headers.username;


   const NewCourse= await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })


    const adminCourse= await Admin.updateOne({
        username:username        
    },{
        "$push":{
            createdCourses:NewCourse
        }
    })




    res.json({
        msg:"Course added successfully",courseId:NewCourse._id,
        msg:"Course deatails",NewCourse
    })
})

 

router.get("/mycourses",adminMiddleware,async (req,res)=>{


    const username= req.headers.username;
        
    const admin  = await Admin.findOne({
        username:username,
    })


    console.log(admin)


    // const courses= await Course.find({
    //     _id: {
    //         "$in":admin.createdCourses
    //     }
    // })
    res.json({
        createdCourses:admin.createdCourses
    })
})

router.put("/courses",adminMiddleware,async(req,res)=>{
    // it should update the price or details of courses owned by themselves not by any other admins
    // somehow if we can access the createdCourse array of the Admin schema then we can use updateOne on createdCourses this way we will be able to update the price of courses that we have created.

    const updateCourse=await Admin.updateOne({
        title:req.body.title
    },{
        $set:{price:req.body.password}
    })
    
    res.status(200).json({
        updateCourse
    })

})

module.exports=router;
