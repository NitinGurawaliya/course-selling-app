const {Admin}=require("../db/db")

function adminMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password

    Admin.findOne({
    username:username,
    password:password
   })
   .then(function(value){
    if(value){
        next();
    }
    else{
        res.status(400).json({
            msg:"Admin donot exist "
        })
    }
   })

}


module.exports=adminMiddleware