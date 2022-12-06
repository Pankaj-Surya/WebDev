const express = require('express');
let userRouter = express.Router();
const {getUser,updateUser,deleteUser,getAllUser} = require('.././controller/userController')
const {protectRoute,isAuthorised} = require('.././helper')
const {login,signup} = require('../././controller/authController')
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
