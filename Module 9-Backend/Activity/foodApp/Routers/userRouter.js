const express = require('express');
let userRouter = express.Router();
const {getUser,updateUser,deleteUser,getAllUser} = require('.././controller/userController')
const {protectRoute,isAuthorised} = require('.././helper')
const {login,signup,forgetpassword,resetpassword,logout} = require('../././controller/authController')
// user ke option
userRouter
.route('/:id')
 // midleware route
.get(protectRoute,getUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/signup')
.post(signup)

userRouter
.route('/login')
.post(login)

userRouter
.route('/forgetpassword')
.post(forgetpassword)

userRouter
.route('/resetpassword')
.post(resetpassword)

userRouter
.route("/logout")
.get(logout);

// profile page
userRouter.use(protectRoute)
userRouter
.route('/userProfile')
.get(getUser)

// admin specific work function
userRouter.use(isAuthorised(['admin']))
 userRouter
.route("/")
.get(getAllUser)





module.exports = userRouter;
