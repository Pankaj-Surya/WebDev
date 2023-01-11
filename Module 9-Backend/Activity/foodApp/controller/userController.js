const userModel = require('../models/userModel')
console.log(userModel)
module.exports.getUser =async function (req, res, next) {
 try {
    let id = req.id;
    console.log(id);
    let user = await userModel.findById(id)

    res.json({msg : "user retrtived successfully",
              data : user })
 } catch (error) {
    res.json({msg :error.message})
 }

}

// module.exports.postUser=function (req, res) {
//   console.log(req.body.Name);
//   //then i can put this in db
//   user.push(req.body);
//   res.json({
//     message: "Data received successfully",
//     user: req.body,
//   });
// }

// update user by id 
module.exports.updateUser = async function (req, res){
    console.log(req.body);
    let id = req.params.id;
    let user = await userModel.findById(id);

    let dataToBeUpdated = req.body;
     // {
  //   name: "Abhi",
  //   email: 'abc@gmail.com'
  // }
   
  try {
    if(user){
      const keys = [];  //['name','email]
      for(let key in dataToBeUpdated){
          keys.push(key)
      }
       
      for(let i=0;i<keys.length; i++){
         user[keys[i]] = dataToBeUpdated[keys[i]]
      }
      console.log("abcd ",user);
  
     const updatedData = await user.save();
     console.log("updatedData -->  ",user);
  
      res.json({
          msg : "data successfully updated",
          updatedData
      })
    }else{
      res.json({
        msg : "User not found",   
    }) 
    }
    } catch (error) {
       console.log(error.message)
        res.json({
            msg : error.message,   
        })  
    }



}

module.exports.deleteUser = async function (req, res) {
    try {
      let id = req.params.id;
      // let doc = await userModel.deleteOne({ email: "abcd@gmail.com" });
      // let doc = await userModel.findOneAndRemove({ email: "abcde@gmail.com" });
      let user = await userModel.findByIdAndDelete(id);
      res.json({
        msg: "user has been deleted",
        user,
      });
    } catch (err) {
      res.json({
        msg: err.message,
      });
    }
  };
  
module.exports.getAllUser = async function (req, res) {
    try {
      let allUsers = await userModel.find();
      res.json({
        msg: "user id is ",
        allUsers,
      });
    } catch (err) {
      res.json({
        msg: err.message,
      });
    }
  };


// // 2. read -> All / One User
//   module.exports.getUser = async function getUser(req,res,next){
//     //res.send(user);
//     // console.log("getUser()")
//     //next();
//     let allUsers = await userModel.find()
//     //let oneUser =  await userModel.findOne({name : 'Pankaj'})
//     res.json({message : "list of user",
//     data : allUsers})
//     }
    
//     // note after res.send() if we code anything that will work in console
//     // but response is not impacted becoz res is already sent
    
//     // if we make two res in diff function then it 
//     // will through error res.setHeader
    
//     //------ simple CRUD--------------
    
//     // create -> new user (by passing json data to body in postman )
//     module.exports.getUser = function postUser(req, res)  {
//         console.log(req.body.Name);
//         //then i can put this in db 
//         user = req.body;
//         res.json({
//             message: "Data received successfully",
//             user: req.body
//         });
//     }
    
//     // function updateUser(req, res) {
//     //     console.log(req.body);
//     //     let dataToBeUpdated = req.body;
//     //     for (key in dataToBeUpdated) {
//     //         user[key] = dataToBeUpdated[key];
//     //     }
//     //     res.json({
//     //         message: "data updated succesfully",
//     //         user:req.body
//     //     })
//     // }
    
//     // function deleteUser(req, res) {
//     //     user = {};
//     //     res.json({
//     //         msg: "user has been deleted"
//     //     });
//     // }
    
//     function getUserById (req, res)  {
//         res.statusCode = 200;
//         console.log("params passed");
//         res.send("user id is",req.params.id);
//         let paramId = req.params.id;
//         let obj = {};
//         for(let i=0;i<user.length;i++) {
//             if(user[i]["id"]==paramId){
//                 obj = user[i];
//             }
//         }
//        res.json({
//          msg : "user id been passed as params",
//          data : obj
//        })
//     }
    
 
    
//     //-------MongoDB CRUD------------------------
    
//     // 1. create
//     // (async function createUser(){
//     //     let user = {
//     //         name : "Sunny",
//     //         email : "bunny@gmail.com",
//     //         password : "12345678",
//     //         confirmPassword : "12345678",
//     //     };
//     //     let data = userModel.create(user)
//     //     console.log(data);
//     //   })();
    
//     //  create create  
//     // async function postSignup(req, res) {
//     //     let userObj = req.body;
//     //     let user = await userModel.create(userObj);
//     //     console.log(req.body);
//     //     res.json({
//     //         msg: "user signed up",
//     //         data :  user,
//     //     })
//     // }
    
//     // 2. read
    
//     async function getUser(req,res,next){
//         //res.send(user);
//         // console.log("getUser()")
//         //next();
//         let allUsers = await userModel.find()
//         //let oneUser =  await userModel.findOne({name : 'Pankaj'})
//         res.json({message : "list of user",
//         data : allUsers})
//     }
    
//     // 3. update/patch
//     async function updateUser(req, res) {
//         console.log(req.body);
//         let dataToBeUpdated = req.body;
//         let user = await userModel.findOneAndUpdate({email:'sachin@gmail.com'},dataToBeUpdated)
//         // for (key in dataToBeUpdated) {
//         //     user[key] = dataToBeUpdated[key];
//         // }
//         res.json({
//             message: "data updated succesfully",
//             user:req.body
//         })
//     }
    
//     // 4. delete
//     async function deleteUser(req, res) {
//         const dataToBeDeleted=req.body;
//         user =await userModel.findOneAndDelete(dataToBeDeleted);
//         res.json({
//             msg: "user has been deleted",
//             data : user
//         });
//     }
    
  