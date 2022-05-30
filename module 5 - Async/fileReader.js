const fs = require("fs");
console.log("Before");
// let ans = fs.readFileSync("f1.txt","utf8");
// console.log("ans",ans);

//async function -->nodejs --> confirmation --> cb --> first parameter reserve for error

fs.readFile("f1.txt",frConf)

console.log("Mujhe wait nahi karna");

console.log("After");

//parameter of the function that is passsed to async function is already determined
function frConf(err,data){
   if(err){
    

       console.log("Err "+err);
   }else{
       //Q.console.log("data "+data)  vs console.log("data ",data) showing buffer in console
       //first waale me type conversion hui hai
      // buffer string yani utf8 me convert ho gya hai

       console.log("data "+data)
   }
}


while (true){
    
}