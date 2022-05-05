//promise ---> 1.fulfill
//             2. reject 
//             3. pending 

// const { request } = require("https")


// readFileSync(name);
// readFile(name,cb);
//

const fs=require("fs");
console.log("Before");
let flKaPromise = fs.promises.readFile("f1.txt");
let f2KaPromise = fs.promises.readFile("f2.txt");
console.log(flKaPromise); //Promise { <pending> }


//if promise  resolve fulfill we used then()
flKaPromise.then(function(data){
        console.log(data+"");
})

// if promise reject we used catch
flKaPromise.catch(function(error){
    console.log(error);
})

f2KaPromise.then(function(data){
    console.log(""+data);
})

f2KaPromise.catch(function(error){
    console.log(error);
})

console.log("After");




//