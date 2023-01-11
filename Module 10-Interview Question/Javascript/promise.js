//var fetch = require("node-fetch");
var fs = require("fs")


// callbacks : callbak hell and inversion of control
// fetch('https://fakestoreapi.com/products/1',function(err,res){
//     if(err) return console.error(err)
//     console.log("res : ",res.toString)
// })


let promise = new Promise(function(resolve, reject){
    const str1 = "gfgf";
    const str2 = "gfg";
    if(str1 == str2){
        resolve();
    }else{
        reject();
    }
})
    
promise
  .then(function(){
    console.log("promise-1 resolved successfully")
  }).then(function(){
    console.log("promise-2 resolved successfully")
  }).catch(function(err){
    console.log("promise rejected")
  })

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


