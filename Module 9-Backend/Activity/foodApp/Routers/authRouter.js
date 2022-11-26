const e = require('express');
const express = require('express');

let authRouter = express.Router();
const userModel = require('../models/userModel')


authRouter
    .route("/signup")
    .get(getSignup)
    .post(postSignup)

authRouter
    .route("/login")
    .post(loginUser)

function getSignup(req, res) {
    res.sendFile("/public/index.html", { root: __dirname });
}

async function postSignup(req, res) {
    let userObj = req.body;
    // server console
    console.log(req.body);
    console.log('in postsignup')
    let user = await userModel.create(userObj);
    res.json({
        msg: "user signed up",
        data: userObj,
    })
}


async function loginUser(req, res) {
    try {
        const data = req.body;
        if (data.email) {
            let user = await userModel.findOne({ email: data.email })
            if (user) {
                if (user.password == data.password) {
                    res.cookie('isLoggedIn', true)
                    res.json({
                        message: "User Successfully Logged in",
                        info: data
                    })
                } else {
                    res.json({
                        message: "Invalid Credential"
                    })
                }

            } else {
                res.json({
                    message: "User Not Found"
                })
            }
        } else {
            res.json({
                message: "Please enter your email"
            })
        }
    } catch (error) {
        res.json({
            message: error.message
        })
    }

}
module.exports = authRouter