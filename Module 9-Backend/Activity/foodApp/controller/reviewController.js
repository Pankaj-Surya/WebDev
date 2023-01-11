const planModel = require("../models/planModel");
const reviewModel = require("../models/reviewModel");
console.log(reviewModel)

module.exports.getAllReviews = async function (req, res) {
    try {
        const reviews = await reviewModel.find();
        if (reviews) {
            return res.json({
                msg: "review retrieved",
                reviews,
            });
        } else {
            return res.json({
                msg: "reviews not found",
            });
        }
    } catch (err) {
        res.json({
            msg: err.message,
        });
    }
};


module.exports.top3Review = async function (req, res) {
    try {
        const top3 = await reviewModel.find().sort({ rating: -1 }).limit(3);
        if (top3) {
            return res.json({
                msg: "top3review retrieved",
                top3,
            });
        } else {
            return res.json({
                msg: "top3reviews not found",
            });
        }
    } catch (err) {
        res.json({
            msg: err.message,
        });
    }
}

// parameter - planID and then filter by planID
module.exports.getPlanReview = async function (req, res) {
    // what is plan ? -> by id
    // get allReview the filter the review on basis of id
    // try {
        console.log("inside plan review")
        const planId = req.params.id;
        console.log("planId",planId)
        // get all reviews
        let reviews = await reviewModel.find();
        console.log("reviews",reviews.length);
        reviews = reviews.filter(review => review.plan['_id'] == planId);
        if (reviews) {
            return res.json({
                msg: "reviews retrieved",
                reviews,
            });
        } else {
            return res.json({
                msg: "reviews not found",
            });
        }
    // } catch (err) {
    //     res.json({
    //         msg: err.message,
    //     });
    // }
}

// params - planId and sent obj data - in body
module.exports.createReview = async function (req, res) {
    // try {
        const planId = req.params.plan;
        const plan = await planModel.findById(planId);
        const reviewObj = req.body;
        console.log(reviewObj)
        const postReview = reviewModel.create(reviewObj);
        //replace with orig formula
        plan.ratingsAverage = (plan.ratingsAverage + req.body.rating) / 2;
        await plan.save();
        return res.json({
            msg: "review posted",
            postReview,
        });
    // } catch (err) {
    //     res.status(500).json({
    //         msg: err.message,
    //     });
    // }
}

// parameter - planID and req.body - reviewId and plus data to update
module.exports.updateReview = async function (req, res) {
    try {
        let planId = req.params.plan; //which plan's review is being updated
        let id = req.body.id; //which review needs to be updated
        console.log("planId",planId)
        console.log("req body review id",id)
        let dataToBeUpdated = req.body;
        let keys = [];
        for (let key in dataToBeUpdated) {
            if (key == id) continue;
            keys.push(key);
        }
        // key.include("rating")
        //use review's rating to calculate avg rating and update in plan
        let review = await reviewModel.findById(id);
        console.log(review)
        for (let i = 0; i < keys.length; i++) {
            review[keys[i]] = dataToBeUpdated[keys[i]];
        }
        await review.save();
        return res.json({
            message: "plan updated succesfully",
            review
        })
   }
    catch (err) {
        return res.json({
            msg: err.message
        })
    }
}


// parameter - planID and req.body - reviewId
module.exports.deleteReview = async function (req, res) {
    // which plan review should be deleted?
    // which review should be deleted
    try {
        let planId = req.params.plan;
        let reviewId = req.body.id;
        //change avg rating of plan
        let review = await reviewModel.findByIdAndDelete(reviewId);
        res.json({
            message: "review deleted"
        })
    }
    catch (err) {
        return res.json({
            msg: err.message
        })
    }
}
