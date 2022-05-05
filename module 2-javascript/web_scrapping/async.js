const fs=require("fs");

// console.log("Before ");

// let content = fs.readFileSync("file.txt");

// console.log(content+" ");

// console.log("After");


// ASYCNHRONOUS ==> readFile('filename',cb)
//                  parallely line of code executes
// SYNCHRONOUS  ==> readFileSync() 
//                  line by line code execcute
// n number of lines of code
 
console.log("Before ");

 fs.readFile("f2.txt",cb1);
 fs.readFile("file.txt",cb2);

function cb1(error,data){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("Data of file1 --> "+data+"");
    }
 
}

function cb2(error,data){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("Data of file2 --> "+data+"");
    }
 
}

//console.log(content+" ");

console.log("After");

//Call Stack : sync task execute            
// event loop <--> task queue /waiting queue  : callback of async task wait till call stack empty
//Node API  : Asychrounus task execute 

