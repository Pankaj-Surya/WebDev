//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs=require("fs");
let path=require("path");

let dirPath=path.join(__dirname,"..","unorganised");
//console.log(dirPath);

let files=fs.readdirSync(dirPath);
//console.log(files);

for(let i=0;i<files.length;i++)
{
  let fileName=files[i];
  //console.log(fileName);
  let extName=path.extname(fileName).slice
  (1);
  //let extensionName=path.extName(fileName);
 console.log(fileName+" --> "+extName+" File");
}