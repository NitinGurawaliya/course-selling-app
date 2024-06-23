const {Admin}=require("../db/db")
const jwt= require("jsonwebtoken");
const {JWT_SECRET}= require("../config")

function adminMiddleware(req,res,next){

    const authHeader = req.headers.authorization;

    if(!authHeader ||  !authHeader.startsWith('Bearer ')){
        res.status(403).json({
            msg:"Token incorrert or not proveded "
        })
    }

    const token= authHeader.split(' ')[1].trim();


    const decoded = jwt.verify(token,JWT_SECRET);
    

    req.admin= decoded;
    next();
}


module.exports=adminMiddleware

