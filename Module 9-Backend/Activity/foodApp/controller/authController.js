const express = require('express');

let authRouter = express.Router();
const userModel = require('.././models/userModel')
var jwt = require('jsonwebtoken');
const JWT_KEY = 'ddhdjjenjcco23fjf';

// signup user
module.exports.signup = async function (req, res) {
   try {
    let userObj = req.body;
    // server console
    console.log(req.body);
    console.log('in postsignup')
    let user = await userModel.create(userObj);
    
    if(user){
        res.json({
            msg: "user signed up",
            data: user,
        })
    }else{
        res.json({
            msg: "error while siging up",
           
        })
    }
    
   } catch (error) {
     res.json({
        msg : error.message,
     })   
   }
}


// login user
module.exports.login = async function (req, res) {
    try {
        const data = req.body;
        if (data.email) {
            let user = await userModel.findOne({ email: data.email })
            if (user) {
                if (user.password == data.password) {
                    //JWT : Heder=algo , Payload=uid , Signature=s_key+algo+uid
                    let uid = user['_id'];
                    var token = jwt.sign({
                        payload : uid
                    },JWT_KEY)
                    res.cookie('login', token)
                    return res.status(200).json({
                        message: "User Successfully Logged in",
                        info: data
                    })
                } else {
                    return res.status(401).json({
                        message: "Invalid Credential"
                    })
                }

            } else {
                 return res.status(401).json({
                    message: "User Not Found"
                })
            }
        } else {
             return res.status(406).json({
                message: "Please enter your email"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }

}

