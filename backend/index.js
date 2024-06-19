const express= require("express")
const app=express();
app.use(express.json())

const adminRouter=require("./routes/admin")
const userRouter=require("./routes/user")


app.use("/admin",adminRouter)
app.use("/user",userRouter)




app.listen(3000)








