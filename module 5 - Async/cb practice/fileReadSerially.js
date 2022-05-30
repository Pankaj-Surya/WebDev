let fs = require("fs");

const path = require("path");
let f1Path = path.join(__dirname,"f1.txt");
let f2Path = path.join(__dirname,"f2.txt");
let f3Path = path.join(__dirname,"f3.txt");
let f4Path = path.join(__dirname,"f4.txt");

console.log("Before");
// code to read 3 fils parallely

let outputContent ="";
fs.readFile(f1Path,cb1);



function cb1(err,data){
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("file1 : "+data)
        outputContent+=data;
        fs.readFile(f2Path,cb2);
    }
}



function cb2(err,data){
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("file2 : "+data);
        outputContent+=data;
        fs.readFile(f3Path,cb3);
    }
}



function cb3(err,data){
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("file3 : "+data);
        outputContent+=data;
        fs.writeFile(f4Path,outputContent,cb4);
    }
}

function cb4(err,data){
    console.log("f4 created")
    fs.readFile(f4Path,cbf4read);
}

function cbf4read(err,data){
    console.log("file4 "+data);
}

console.log("After");