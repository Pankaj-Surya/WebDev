const express = require('express');
const path = require('path');
//const userModel = require('./models/userModel')
const app = express();
const mongoose = require('mongoose');
const {db_link} = require("./secret");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");
//const { validate } = require('./models/userModel');

//console.log(db_link)

//middle ware -> covert frontend req into json
app.use(express.json());


let user = [
    {
    id : 1,
    name : 'John',
    },
    {
    id : 2,
    name : 'Pant'
    },
    {
    id : 3,
    name : 'Surya'
    }
];

// mini app ->
let userRouter = express.Router();
let authReducer = express.Router();


// base or router to use
app.use('/user',userRouter)
app.use('/auth',authReducer)

userRouter
.route('/')
 // midleware route
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/:id').get(getUserById)

authReducer
.route("/signup")
.get(getSignup)
.post(postSignup)


function middleware1(req,res,next){
    console.log("Middleware 1 ");
    next();
}

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

function middleware2(req,res,next){
    console.log("Middleware 2 ");
    res.json({
        msg : " data returned",
        data : user
    })
    console.log("after res sent")
}

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

// signup methods

// function getSignup (req, res) {
    
//     res.sendFile(path.join(__dirname,'public' ,'index.html'))
//     // res.json({
//     //   msg : "signup successfully received",
//     //  })
// }

// function postSignup (req, res) {
//     let obj = res.body;
//     console.log("obj --> ",obj)
//     res.json({
//         msg : "post signup data",
//         data : obj
//     })
// }

function getSignup(req, res) {
    res.sendFile("/public/index.html", { root: __dirname });
}

async function postSignup(req, res) {
    let userObj = req.body;
    // server console
    console.log(req.body);
    console.log('in postsignup')
    let user = await userModel.create(data);
    res.json({
        msg: "user signed up",
        data :  userObj,
    })
}

app.listen(5000);

mongoose.connect(db_link)
  .then(function (db){
    console.log("db connected");
    //console.log(db);
  })
  .catch(function(err){
    console.log(err);
  })

  // cretated schema
  const userSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true,
        validate : function(){
            return emailValidator.validate(this.email);
        }
    },
    password :{
        type : String,
        required : true,
        kMaxLength :7
    },
    confirmPassword :{
        type : String,
        required : true,
        kMaxLength :7,
        validate : function(){
            return this.password==this.confirmPassword
        }
    }

  })

//-------------->learning hooks<-----------------

// save pre post
//   userSchema.pre('save', function () {
//     console.log("before saving in db");
//   })
//   userSchema.post("save", function (doc) {
//     console.log("after saving in db",doc);
//   });

// remove pre post
//   userSchema.pre('remove', function () {
//     console.log("before removing in db");
//   })
//   userSchema.post("remove", function (doc) {
//     console.log("after removing in db",doc);
//   });

// always put pre post after schema
userSchema.pre("save", function () {
    console.log("before saving password in db");
    this.confirmPassword = undefined;
  });

userSchema.pre("save",async function () {
    console.log("before saving hashing password in db");
    const salt =await bcrypt.genSalt();
    const hashedString =await bcrypt.hash(this.password,salt)
    this.password = hashedString
    console.log("hashedString",hashedString)
})

  //model 
  const userModel = mongoose.model("userModel",userSchema);


// 1. create
//  (async function createUser(){
    // let user = {
    //     name : "Sunny",
    //     email : "bunny@gmail.com",
    //     password : "12345678",
    //     confirmPassword : "12345678",
    // };
//     let data = userModel.create(user)
//     console.log(data);
//   })();

//  create create  
async function postSignup(req, res) {
    try {
        let userObj = req.body;
    let user = await userModel.create(userObj);
    console.log(req.body);
    res.json({
        msg: "user signed up",
        data :  user,
    })
    } catch (error) {
      res.json({
        msg : error.message
      })  
    }
}

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
    //user =await userModel.findOneAndDelete(dataToBeDeleted);
    user =await userModel.findOne(dataToBeDeleted);
    console.log("find user",user)
    let del = await user.remove();
    console.log("delete user",del)
    res.json({
        msg: "user has been deleted",
        data : user
    });
}



