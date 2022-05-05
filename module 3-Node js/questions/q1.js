let fs=require("fs");

let path=require("path");


// Create Dir
//if folder exist it throw error so use if condition
//fs.mkdirSync("humariDirectory");
// if(!fs.existsSync("humariDirectory"))
// {
// fs.mkdirSync("humariDirectory");
// }



//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

//question folder-->inside new folder-->inside new file(content: new file has been made)

if(!fs.existsSync("newFolder"))
fs.mkdirSync("newFolder");

// if we mak file like this newFile created indide questions not inside newFolder
//fs.writeFileSync('newFile')


let fileKaPath=path.join(__dirname,"newFolder","newFile.txt");
//console.log("This is PATH :"+fileKaPath);
fs.writeFileSync(fileKaPath,"new file has been made")