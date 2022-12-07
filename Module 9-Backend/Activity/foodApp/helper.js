var jwt = require('jsonwebtoken');
const userModel = require('./models/userModel');
const JWT_KEY = 'ddhdjjenjcco23fjf'
var jwt = require("jsonwebtoken");

  //let flag = true ; // user logged in or not
module.exports.protectRoute = async  function (req,res,next){
    if(req.cookies.login) {
     //JWT token
     let token = req.cookies.login;
     let payloadObj = jwt.verify(token,JWT_KEY);
     if(payloadObj){
      const user = await  userModel.findById(payloadObj.payload)
       req.id = user.id;
       req.role = user.role;
       next();
     } 
     else{
      // Tp Display in Browser
      const client = req.get("User-Agent");
      if(client.includes("Mozilla")==true){
        return res.redirect('/login')
      }   
        // TO Display in Postman
        return res.json({
            message : "please login again"
         })
     }
    }else{
      return res.json({
         message : "resorce not allowed without login"
     })
    }
 }

 // isAuthorised -> to check the user's role
 // client will send role key in req obj
module.exports.isAuthorised=function (roles) {
  return function(req,res,next){
      if(roles.includes(req.role)){
       // console.log("role --->",req.role) 
        next();     
      }else{
       res.status(401).json({
           msg : "opertaion not allowed for this role",
           //role : req.role
       })
      }
  }
}

