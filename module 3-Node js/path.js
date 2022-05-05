// path of file
//"E:\Pepcoding\Demos\Web Dev\module 3-Node js\path.js"

let path =require("path");

// console.log(path);

let extensionName =path.extname("E:\Pepcoding\Demos\Web Dev\module 3-Node js\path.js");
console.log("extName :"+extensionName);

let baseName=path.basename("E:\Pepcoding\Demos\Web Dev\module 3-Node js\path.js");
console.log("BaseName :"+ baseName  );

//dir  path of given file
// console.log("Dir Path :"+__dirname);

// file path
console.log("File Path :"+__filename);
//E:\Pepcoding\Demos\Web Dev\module 3-Node js\path.js

//
let dirPath = __dirname;
console.log(dirPath);
let newFilePath=path.join(dirPath,"test.js");
console.log("NewFileName"+newFilePath);