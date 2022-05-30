let fs = require("fs");

const path = require("path");
let f1Path = path.join(__dirname,"f1.txt");
let f2Path = path.join(__dirname,"f2.txt");
let f3Path = path.join(__dirname,"f3.txt");

console.log("Before");
// code to read 3 fils parallely
fs.readFile(f1Path,cb1);
fs.readFile(f2Path,cb2);
fs.readFile(f3Path,cb3);
function cb1(err,data){
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("file1 : "+data)
    }
}



function cb2(err,data){
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("file2 : "+data)
    }
}



function cb3(err,data){
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("file3 : "+data)
    }
}

console.log("After");