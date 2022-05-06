let fs=require("fs");

// console.log(fs);

//CRUD Operation on fs 
//DOM , Android Dev, sql ,Angular,React

let path=require("path");

// let filePath=path.join(__dirname,"file.txt");
// console.log(filePath);

// CRUD on Files

// // C-Create
// //Write File : even we dont have file
// fs.writeFileSync(filePath,"I am text File");
// // overwrite in existing file
// fs.writeFileSync(filePath,"write in existing file.");

// // R-Read
// console.log("Before update :");
// let content=fs.readFileSync(filePath,'utf-8');
// console.log(content);

// // U-Update
// let updateFile=fs.appendFileSync(filePath,"\n file updated")
// console.log("After Update");
// console.log(fs.readFileSync(filePath,'utf-8'));

// // D-Delete
// fs.unlinkSync(filePath);

//HW CRUD on Directory

// Create Dir
// if folder exist it throw error so use if condition
fs.mkdirSync("mkDir");
// if(!fs.existsSync("humariDirectory"))
// {
// fs.mkdirSync("humariDirectory");
// }

// // Read Dir
// // use double double forward slash
//  let folderPath="E:\\Pepcoding\\Demos\\Web Dev\\module 3-Node js";

//  let contentOfFolder=fs.readdirSync(folderPath);
//  console.log(contentOfFolder);

// //Delete DIR
// fs.rmdirSync("humariDirectory");

 // Copy Dir
//  let sourcePath=path.join(__dirname,"file.txt");

//  let destPath=path.join(__dirname,"module","file.txt");
//  console.log(sourcePath);
//  console.log(destPath);
//  fs.copyFileSync(sourcePath,destPath);

