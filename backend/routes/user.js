const express= require("express")
const router= express.Router();

const userMiddleware=require("../middlewares/user");
const { User, Course } = require("../db/db");

router.post("/signup",async (req,res)=>{

    const username= req.body.username;
    const password= req.body.password;

    const userExists = await User.findOne({
        username:username,
        password:password
    })

    if(userExists){
        return res.json({
            msg:"username already taken"
        })
    }

     await User.create({
        username:username,
        password:password
    })

    res.json({
        msg:"User created successfully "
    })


})


router.get("/courses",userMiddleware,async (req,res)=>{

    const getCourses=await Course.find({})

    res.status(200).json({
        getCourses
    })



})

router.post("/courses/:courseId",userMiddleware,async (req,res)=>{
    const courseId= req.params.courseId;
    const username= req.header.username;

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


router.get("/purchasedCourses",userMiddleware,async(req,res)=>{

    const user= await User.findOne({
         username:req.headers.username,
    })

    console.log(user.purchasedCourses)

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