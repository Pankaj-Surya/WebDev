// file system : 

// deals with files and folder
// file: create, read, update, delete, append, copy

let fs = require("fs");

console.log("before");

// let content = fs.readFileSync("f1.txt");
// console.log(content);

// //write
// fs.writeFileSync("newFile.txt"," ");

// fs.writeFileSync("newFile.txt"," newFile content written is here")

// //delete
// fs.unlinkSync("newFile.txt");


// console.log("after");


//************Directory*********************

//create
fs.mkdirSync(__dirname+"newFolder");

// fs.readdirSync("newFolders");

// //delete
// fs.rmdirSync("toberemove");

// //files and folder --> get 
// let contain =  fs.readdirSync("E:\\Pepcoding\\Demos\\Web Dev\\module 3-Node js\\unorganised");
// console.log(contain);

// fs.mkdirSync("humariDirectory");
// if(!fs.existsSync("humariDirectory"))
// {
// fs.mkdirSync("humariDirectory");
// }





















