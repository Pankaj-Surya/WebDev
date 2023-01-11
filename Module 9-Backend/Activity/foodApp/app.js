const express = require('express');
const app = express();
//const {db_link} = require('./secret')
//const { application } = require('express');
//console.log(db_link)

//middle ware -> covert frontend req into json
const cookieParser = require('cookie-parser');
app.use(express.json());

app.use(cookieParser())

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
let userRouter = require("./Routers/userRouter");
// let authRouter = require("./Routers/authRouter");
let planRouter = require("./Routers/planRouter");
let reviewRouter = require("./Routers/reviewRouter");
// base or router to use
app.use('/user',userRouter)
// app.use('/auth',authRouter)

app.use('/plan',planRouter)

app.use('/review',reviewRouter)

//For Testing the model
//const planModel = require("./models/planModel")

app.listen(5000);





