const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://221030201:qJYxKYmP2YQTwNIs@cluster0.ukfua3o.mongodb.net/')


const AdminSchema=new mongoose.Schema({
username:String,
password:String,
firstName:String,

})

const UserSchema=new mongoose.Schema({
username:String,
password:String,
firstName:String,
purchasedCourses:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Course'
}]
})

const CourseSchema=new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    imageLink:String   
})


const Admin=mongoose.model('Admin',AdminSchema)
const User=mongoose.model('User',UserSchema)
const Course=mongoose.model('Course',CourseSchema)

module.exports={
    Admin,
    User,
    Course
}