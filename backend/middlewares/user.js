const {User}=require("../db/db")

function userMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password

   User.findOne({
    username:username,
    password:password
   })
   .then(function(value){
    if(value){
        next();
    }
    else{
        res.status(400).json({
            msg:"User donot exist "
        })
    }
   })

}


module.exports=userMiddleware