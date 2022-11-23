const express = require('express');
const path = require('path');

const app = express();

//middle ware -> covert frontend req into json
app.use(express.json());

// check route in postman
//console.log("dir------",__dirname)
//console.log("dir------",__dirname+"\"+"\public\index.html");
//console.log("------",path.join(__dirname, "public", "index.html"))


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

function getUser(req,res){
        res.send(user);
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

function postSignup(req, res) {
    let { email, name, password } = req.body;
    // server console
    console.log(req.body);
    res.json({
        msg: "user signed up",
        data : req.body,
        email ,
        name,
        password
    })
}

app.listen(5000);