const express= require("express")
const router= express.Router();
const zod = require("zod")
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")


const adminMiddleware=require("../middlewares/admin");
const { Admin, Course} = require("../db/db");


const signupBody= zod.object({
    username:zod.string().email(),
    password:zod.string().min(8)
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

    })

    const adminId= admin._id;

    console.log(adminId)

    console.log(JWT_SECRET)

    const token= jwt.sign({
        adminId
    },JWT_SECRET)

    res.json({
        msg:"Admin created successfully",
        token
    })
})



const signinBody= zod.object({
    username:zod.string().email(),
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
        username:req.body.username
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

    const title=req.body.title;
    const description = req.body.description;
    const price=req.body.price;
    const imageLink= req.body.imageLink;

   const NewCourse= await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })

    res.json({
        msg:"Course added successfully",courseId:NewCourse._id
    })
})

 

router.get("/mycourses",adminMiddleware,async (req,res)=>{
    // update the admin schema make an array of createdCourses using Schema.types.objectId with a refrence to course table. 
    //any time an admin creates a course it is added to its createdCourses array which is refrence to course schema. 
        // get the courses created by only themselves not the other courses
    const allCourses = await Course.find({})

    res.status(200).json({
        allCourses
    })
})

router.put("/courses",adminMiddleware,async(req,res)=>{
    // it should update the price or details of courses owned by themselves not by any other admins
    // somehow if we can access the createdCourse array of the Admin schema then we can use updateOne on createdCourses this way we will be able to update the price of courses that we have created.

    const updateCourse=await User.updateOne({
        title:req.body.title
    },{
        $set:{price:req.body.price}
    })
    
    res.status(200).json({
        updateCourse
    })

})

module.exports=router;
