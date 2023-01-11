const mongoose = require("mongoose");
const { db_link } = require('.././secret');

// connect to Mongo
mongoose
    .connect(db_link)
    .then(function (db) {
        console.log("review db connected");
    })
    .catch(function (err) {
        console.error(err);
    });

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, "review is required"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, "rating is required"],
    },
    createdAt :{
        type : Date,
        default: Date.now()
    },
    user : {
       type : mongoose.Schema.ObjectId,
       ref : 'userModel',
       required: [true, "review must belong to a user"],
    },
    plan : {
        type : mongoose.Schema.ObjectId,
        ref : 'planModel',
        required: [true, "plan must belong to a user"],
    }
});

reviewSchema.pre(/^find/,function(next){
  this.populate({
    path : 'user',
    select : "name profileImage"
  }).populate("plan");
  next();
})



const reviewModel = mongoose.model('reviewModel',reviewSchema);

//  (async function createReview() {
//     let review = {
//     review : "veryyyy tastyy",
//     user : "638f4dc654b1d7e4d1e847cb",
//     plan : "63919ca274f423fdf4aa6d0d",
//     rating : 3
// }
//     let data = await reviewModel.create(review);
//     console.log(data);
// })();

module.exports = reviewModel;