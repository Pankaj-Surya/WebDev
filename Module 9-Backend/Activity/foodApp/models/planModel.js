const mongoose = require('mongoose')
const {db_link} = require('.././secret')

// connect to mongodb
mongoose
 .connect(db_link)
 .then(function (db){
    console.log("plan db connected")
 })
 .catch(function (err){
    console.log(err.message)
 })

// created the schema for plan
 const planSchema = mongoose.Schema({
     name : {
        type : String,
        required : true,
        unique : true,
        maxLength : [20, `plan name should not exceed 20 characters`]
     },
     duration :{
        type : Number,
        required : true,
     },
     price : {
        type : Number,
        required : true,
     },
     discount : {
        type : Number,
        required : true,
        validate : [ function (){
            return this.discount < 100;
        },'discount could not be 100%']
     }, 
     ratingsAverage : {
        type: Number,
        // default:0
     }
 })

 // made plan mode
 const planModel = mongoose.model("planModel", planSchema);
 module.exports = planModel;

//  (async function createPlan() {
//     let plan = {
//         name: "Superfood",
//         duration: 3,
//         price:10000,
//         ratingsAverage: 3.8,
//         discount: 15
//     }
//     let data = await planModel.create(plan);
//     console.log(data);
//     // const doc = new planModel(plan);
//     // await doc.save();
// })();


