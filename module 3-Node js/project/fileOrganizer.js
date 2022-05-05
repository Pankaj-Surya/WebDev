//1.input folder path & check n
//2.read folder content
//3. divide the files into category/giveFolderName
//4. folderName -->Exist--->moveFile
//   folderName -->not Exist--->create folder--->
//moveFile  (Ex. folder is created for first Audio file)
let fs=require("fs");
const { lstat } = require("fs/promises");
let path=require("path");


let folderPath=process.argv[2];
//console.log(folderPath);

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};

let folderExist=fs.existsSync(folderPath);
if(folderExist){
   let files=fs.readdirSync(folderPath);
   //console.log(files);
   for(let i=0;i<files.length;i++)
   {
       let ext=path.extname(files[i]);
       //console.log(ext.slice(1));
       let nameOfFolder=giveFolderName(ext)
       // console.log(files[i]+"---->"+nameOfFolder);
       let pathOfFOlder=path.join(folderPath,nameOfFolder);
       let pathOfFOlderExist=fs.existsSync(pathOfFOlder);
       if(pathOfFOlderExist){
        moveFile(folderPath,pathOfFOlder,files[i]);
       }
       else{
        fs.mkdirSync(pathOfFOlder);
        moveFile(folderPath,pathOfFOlder,files[i]);
       }

    }
}
else{
console.log("please enter valid pa-th");
}

function giveFolderName(ext)
{
 for(let key in extensions ){
     let extArr=extensions[key];
     for(let i=0;i<extArr.length;i++)
     {
         if(extArr[i]==ext)
         {
             return key;
         }
     }

 }  
 return "Others";
}

function moveFile(folderPath,pathOfFOlder,fileName)
{
    let srcPath=path.join(folderPath,fileName);
    let destPath=path.join(pathOfFOlder,fileName);
    fs.copyFileSync(srcPath,destPath);
    fs.unlinkSync(srcPath); 
}

// for(let key in extensions)
//  {
//     console.log(key);
//      console.log(extensions[key]);
//  } 