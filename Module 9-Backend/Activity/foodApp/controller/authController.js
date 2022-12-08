const express = require('express');

let authRouter = express.Router();
const userModel = require('.././models/userModel')
var jwt = require('jsonwebtoken');
const { sendMail } = require('../utility/nodemailer');
const JWT_KEY = 'ddhdjjenjcco23fjf';

// signup user
module.exports.signup = async function (req, res) {
    try {
        let userObj = req.body;
        // server console
        console.log(req.body);
        console.log('in postsignup')
        let user = await userModel.create(userObj);

        if (user) {
            // send mail
            await sendMail("signup",user)

            res.json({
                msg: "user signed up",
                data: user,
            })
        } else {
            res.json({
                msg: "error while siging up",

            })
        }

    } catch (error) {
        res.json({
            msg: error.message,
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
                        payload: uid
                    }, JWT_KEY)
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

// forget password
module.exports.forgetpassword = async function (req, res) {
    try {
        // get email from req 
        let { email } = req.body;
        // find email in db
        const user = await userModel.findOne({ email: email })
        if (user) {
            // make reset password link with the help of resetToken

            //restToken
            const resetToken = await user.createResetToken();

            // create Link
            //https://xyz.com/resetPassword/resetToken
            let resetPasswordLink = `${req.protocol}://${req.get('host')}/user/${resetToken}`
            // send email to login user using nodemail
            await sendMail("forgetpassword", { email, resetPasswordLink })

            res.json({
                msg: "email sent successfully"
            })
        } else {
            res.json({
                msg: 'user not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }

}


// reset password
module.exports.resetpassword = async function (req, res) {
    try {
        // get token from req
        const token = req.params.token;
        // get password and confirmpassword from req
        let { password, confirmpassword } = req.body;
        // get user from db with help of token
        const user = await userModel.findOne({ resetToken: token })
        // if user present then update in db with help of resetPasswordHandler method - userSchema.resetPasswor
        if (user) {
             //resetPasswordHandler will update user in db
            await user.resetPasswordHandler(password, confirmpassword)
            await user.save()
            res.json({
                msg: "password chnaged succesfully",
            });
        }
        else {
            res.json({
                msg: "user not found",
            });
        }
    } catch (error) {
        res.json({
            msg: err.message
        })
    }
}

module.exports.logout = function (req,res) {
    //make login cookie empty & maxAge: 1 miliseconds
    console.log("logout")
    res.cookie('login', ' ', { maxAge: 1 });
    res.json({
      msg:'user logged out successfully'
    })
}


