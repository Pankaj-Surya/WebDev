const express = require('express');
const path = require('path');
const {db_link} = require('./secret')
const userModel = require('./models/userModel')
const app = express();

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

function postUser(req, res)  {
    console.log(req.body.Name);
    //then i can put this in db 
    user = req.body;
    res.json({
        message: "Data received successfully",
        user: req.body
    });
}

// function updateUser(req, res) {
//     console.log(req.body);
//     let dataToBeUpdated = req.body;
//     for (key in dataToBeUpdated) {
//         user[key] = dataToBeUpdated[key];
//     }
//     res.json({
//         message: "data updated succesfully",
//         user:req.body
//     })
// }

// function deleteUser(req, res) {
//     user = {};
//     res.json({
//         msg: "user has been deleted"
//     });
// }

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
    let user = await userModel.create(userObj);
    res.json({
        msg: "user signed up",
        data :  userObj,
    })
}

app.listen(5000);


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
    user =await userModel.findOneAndDelete(dataToBeDeleted);
    res.json({
        msg: "user has been deleted",
        data : user
    });
}



