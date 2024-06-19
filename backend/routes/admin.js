const express= require("express")
const router= express.Router();


const adminMiddleware=require("../middlewares/admin");
const { Admin, Course} = require("../db/db");

router.post("/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const AdminExists= await Admin.findOne({
        username:username,
        password:password
    })

    if(AdminExists){
        return res.json({
            msg:"Admin already exists"
        })
    }
    

     await Admin.create({
        username:username,
        password:password
    })

    res.json({
        msg:"Admin created successfully "
    })
 
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

 

router.get("/courses",adminMiddleware,async (req,res)=>{

    const allCourses = await Course.find({})

    res.status(200).json({
        allCourses
    })
})

router.put("/courses",adminMiddleware,async(req,res)=>{
    const updateCourse=await Course.updateOne({
        title:req.body.title
    },{
        $set:{price:req.body.price}
    })
    
    


    res.status(200).json({
        updateCourse
    })

})

module.exports=router;
