const { reject } = require("async");
const { resolve } = require("path");

function promisifiedFunc(){
    return new Promise(function(resolve,reject){
        let a = 1;
        let b = 2;
        if(a==b){
            resolve("Equal");
        }else{
            reject("Unequal");
        }

    })
}

let somePromise = promisifiedFunc();
// console.log(somePromise);

somePromise.then(function(x){
    console.log(x);
})

somePromise.catch(function(err){
    console.log(err);
    
})

