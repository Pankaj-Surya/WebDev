const mongoose = require("mongoose");
const {db_link}  = require("../secret");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
console.log(db_link)

// mongoose.connect(db_link, {useNewUrlParser: true, useUnifiedTopology:true});
// mongoose.connection.once('open', function(){
//   console.log('Conection has been made!');
// }).on('error', function(error){
//     console.log('Error is: ', error);
// });

mongoose.connect(db_link)
  .then(function (db){
    console.log("db connected");
    //console.log(db);
  })
  .catch(function(err){
    console.log(err);
})


 // cretated schema
 const userSchema = mongoose.Schema({
  name :{
      type : String,
      required : true
  },
  email :{
      type : String,
      required : true,
      unique : true,
      validate : function(){
          return emailValidator.validate(this.email);
      }
  },
  password :{
      type : String,
      required : true,
      kMaxLength :7
  },
  confirmPassword :{
      type : String,
      // required : true,
      kMaxLength :7,
      validate : function(){
          return this.password==this.confirmPassword
      }
  },
  role : {
    type : String,
    enum : ['admin','user','resturantowner','deliveryby'],
    default:'user'
  },
  profileImage : {
    type : String,
    default : 'img/users/default.jped'
  },
  resetToken : {type : String}

})


//-------------->learning hooks<-----------------
// always put pre post after schema
userSchema.pre("save", function () {
  console.log("before saving password in db");
  this.confirmPassword = undefined;
});

userSchema.methods.createResetToken =async function(){
  const resetToken = uuidv4();
  this.resetToken = resetToken;
  await this.save();
  return resetToken;
}

userSchema.methods.resetPasswordHandler= function(password,confirmPassword){
this.password = password,
this.confirmPassword = confirmPassword,
this.resetToken = undefined
}

// userSchema.pre("save",async function () {
//   console.log("before saving hashing password in db");
//   const salt =await bcrypt.genSalt();
//   const hashedString =await bcrypt.hash(this.password,salt)
//   this.password = hashedString
//   console.log("hashedString",hashedString)
// })

//models
const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;



