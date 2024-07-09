const express= require("express")
const cors= require("cors")
const app=express();
app.use(express.json())
app.use(cors())

const adminRouter=require("./routes/admin")
const userRouter=require("./routes/user")


app.use("/admin",adminRouter)
app.use("/user",userRouter)




app.listen(3000,()=>{
    console.log("Server running on 3000 port")
})








