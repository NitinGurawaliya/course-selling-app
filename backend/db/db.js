const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://221030201:qJYxKYmP2YQTwNIs@cluster0.ukfua3o.mongodb.net/course-selling')


const AdminSchema=new mongoose.Schema({
username:String,
password:String,
gmail:String,
createdCourses:[{
    type:mongoose.Schema.Types.Object,
    ref:'Course'
}]

})

const UserSchema=new mongoose.Schema({
username:String,
password:String,
email:String,
purchasedCourses:[{
    type:mongoose.Schema.Types.Object,
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