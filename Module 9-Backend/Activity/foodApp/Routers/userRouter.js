const express = require('express');
let userRouter = express.Router();

const userModel = require('../models/userModel')

userRouter
.route('/')
 // midleware route
.get(protectRoute,getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route("/getCookies")
.get(getCookies)


userRouter
.route("/setCookies")
.get(setCookies)

userRouter
.route('/:id').get(getUserById)



// 2. read
async function getUser(req,res,next){
//res.send(user);
// console.log("getUser()")
//next();
let allUsers = await userModel.find()
let oneUser =  await userModel.findOne({name : 'Pankaj'})
res.json({message : "list of user",
data : oneUser})
}

// note after res.send() if we code anything that will work in console
// but response is not impacted becoz res is already sent

// if we make two res in diff function then it 
// will through error res.setHeader

//------ simple CRUD--------------
function postUser(req, res)  {
    console.log(req.body.Name);
    //then i can put this in db 
    user = req.body;
    res.json({
        message: "Data received successfully",
        user: req.body
    });
}

function updateUser(req, res) {
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        user[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "data updated succesfully",
        user:req.body
    })
}

function deleteUser(req, res) {
    user = {};
    res.json({
        msg: "user has been deleted"
    });
}

function getUserById (req, res)  {
    res.statusCode = 200;
    console.log("params passed");
    res.send("user id is",req.params.id);
    let paramId = req.params.id;
    let obj = {};
    for(let i=0;i<user.length;i++) {
        if(user[i]["id"]==paramId){
            obj = user[i];
        }
    }
   res.json({
     msg : "user id been passed as params",
     data : obj
   })
}

//----------Cookies Operation--------------------------------

//document.cookie
function setCookies(req,res){
    //res.setHeader('Set-Cookie','isLoggedIn=true')
    res.cookie('isLoggedIn',false,{maxAge:1000*60*60*24, secure:true, httpOnly : true});
    res.cookie('isPrimeMember',true);
    res.send("cookies has been set ")
}

function getCookies(req,res){
    const cookies = req.cookies;
    console.log("cookies", cookies)
    res.send("cookies recieved") 
}

//-------MongoDB CRUD------------------------

// 1. create
// (async function createUser(){
//     let user = {
//         name : "Sunny",
//         email : "bunny@gmail.com",
//         password : "12345678",
//         confirmPassword : "12345678",
//     };
//     let data = userModel.create(user)
//     console.log(data);
//   })();

//  create create  
// async function postSignup(req, res) {
//     let userObj = req.body;
//     let user = await userModel.create(userObj);
//     console.log(req.body);
//     res.json({
//         msg: "user signed up",
//         data :  user,
//     })
// }

// 2. read

async function getUser(req,res,next){
    //res.send(user);
    // console.log("getUser()")
    //next();
    let allUsers = await userModel.find()
    //let oneUser =  await userModel.findOne({name : 'Pankaj'})
    res.json({message : "list of user",
    data : allUsers})
}

// 3. update/patch
async function updateUser(req, res) {
    console.log(req.body);
    let dataToBeUpdated = req.body;
    let user = await userModel.findOneAndUpdate({email:'sachin@gmail.com'},dataToBeUpdated)
    // for (key in dataToBeUpdated) {
    //     user[key] = dataToBeUpdated[key];
    // }
    res.json({
        message: "data updated succesfully",
        user:req.body
    })
}

// 4. delete
async function deleteUser(req, res) {
    const dataToBeDeleted=req.body;
    user =await userModel.findOneAndDelete(dataToBeDeleted);
    res.json({
        msg: "user has been deleted",
        data : user
    });
}

//let flag = true ; // user logged in or not
function protectRoute(req,res,next){
   if(req.cookies.isLoggedIn) {
      next();
   }else{
    res.json({
        message : "resorce not allowed without login"
    })
   }
}

module.exports = userRouter;
