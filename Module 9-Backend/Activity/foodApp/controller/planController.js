const planModel = require('.././models/planModel')
console.log(planModel)
module.exports.getAllPlans =async function(req,res){
  try {
    const allPlans = await planModel.find();

    if(allPlans){
        res.json({
            msg : "all plans retrtived successfully",
            data : allPlans
        })
    }else{
        res.json({
            msg : "plan not found"
        })
    }
  } catch (error) {
    res.json({
        msg : error.message
    })
  }
} 

module.exports.top3Plans =async function(req,res){
    try {
        const top3Plans = await planModel.find().sort({ratingsAverage:-1}).limit(3);
    
        if(top3Plans){
            res.json({
                msg : "top3plan retrtived successfully",
                data : top3Plans
            })
        }else{
            res.json({
                msg : "top3plan not found"
            })
        }
      } catch (error) {
        res.json({
            msg : error.message
        })
      }
} 

module.exports.getPlan =async function(req,res){
    try {
        let id = req.params.id;
        let plan = await planModel.findById(id);
        if (plan) {
          return res.json({
            msg: "plan retrieved",
            data: plan,
          });
        } else {
          //return with apt status code
          return res.json({
            msg: "plan not found",
          });
        }
      } catch (err) {
        res.json({
          msg: err.message,
        });
      }
} 

module.exports.createPlan =async function(req,res){
  try {
    let planObj = req.body;
    const createPlan = await planModel.create(planObj);
    res.json({
        msg : "plan created successfully",
        data : createPlan
    })
  } catch (error) {
    res.json({
        msg : error.message
    })
  }

} 

module.exports.updatePlan =async function(req,res){
 // what plan ? -> by id
 // what update ? by req.body
    try {
    let id = req.params.id;
    let dataToBeUpdated = req.body;
    //console.log("id",id);
    //console.log("dataToBeUpdated",dataToBeUpdated);
    let plan =await planModel.findById(id);
    // got keys to be update
    let keys = [];
    for(let key in dataToBeUpdated){
      keys.push(key)
    }
    for(let i=0; i<keys.length; i++){
       plan[keys[i]] = dataToBeUpdated[keys[i]]
    }
    //console.log("data update till loop")
    // save doc changes in db
    await plan.save();
    return res.json({
        msg: "plan updated succesfully",
        data : plan,
      });
    } catch (err) {
      res.json({
        msg: err.message,
      });
    }
} 

module.exports.deletePlan =async function(req,res){
    try {
        let id = req.params.id;
        let deletedPlan = await planModel.findByIdAndDelete(id);
        console.log(id)
        console.log(deletedPlan)
        return res.json({
            msg: "plan deleted succesfully",
            data :deletedPlan
          });
      } catch (err) {
        res.json({
          msg: err.message
        });
      }
}