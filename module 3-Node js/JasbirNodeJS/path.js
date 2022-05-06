
let path = require("path");
// relative path
//module 3-Node js\JasbirNodeJS\path.js -->r

//absolue path
//E:\Pepcoding\Demos\Web Dev\module 3-Node js\JasbirNodeJS\path.js

// path module

//curreent folder in which we have our js file absolute path
console.log("current dir path : "+__dirname);

// current file path
console.log("current file path : "+__filename);
console.log("--------------------");

// bhi file kis folder mey execute kar rahi hai
console.log("Process cwd : "+process.cwd());

// path join
let folderName = "E:";
let nextFolderName = "Pepcoding";
let childeFolder = "Demos";
let chch ="Web Dev";
let chchch ="module 3-Node js";
let ch4 ="JasbirNodeJS";
let actualFile = "path.js";


let address = path.join(folderName,nextFolderName,childeFolder,chch,chchch,ch4,actualFile);
console.log(address);

console.log("---------------------------");
//2,
console.log(path.join(__dirname,"fs.js"));





