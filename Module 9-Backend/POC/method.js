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





app.listen(5000);