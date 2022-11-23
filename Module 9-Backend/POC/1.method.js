const express = require('express');
const app = express();

//middle ware -> covert frontend req into json
app.use(express.json());
let user = {};

// postman -CRUD check

// post, patch,delete -> res send in json format --> res.json
app.get('/user', (req, res) => {
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log(req.body.Name);
    //then i can put this in db 
    user = req.body;
    res.json({
        message: "Data received successfully",
        user: req.body
    });
});

app.patch('/user', (req, res) => {
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        user[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "data updated succesfully",
        user:req.body
    })
});


app.delete('/user', (req, res) => {
    user = {};
    res.json({
        msg: "user has been deleted"
    });
})

// params
app.get("/user/:id", (req, res) => {
    console.log("params passed");
   res.send("user id is",req.params.id);
   res.json({
    mxg : "user id been passed as params",
   })
})


// params - post
app.post("/user/:id", (req, res) => {
    //res.send("user id is",req.params.id);
    console.log(req.params);
    res.json({
        msg : "user id been passed as params",
        userid : req.params.id 
    })
 })


//query 
app.get("/user", (req, res) =>{
    console.log(req.query)
    res.send(user)
})


app.post("/user", (req, res) => {
    //res.send("user id is",req.params.id);
    console.log(req.params);
    res.json({
        msg : "user query passed ",
        name : req.query.name,
        phone:req.query.phone
    })
 })

app.listen(5000);