//copy index.html file from module1 to a new folder inside module2 having name html.

let fs=require('fs');
let path=require('path');

let srcPath=path.join(__dirname,"..","..",'module 1-html & css','1. Intro html css','index.html');
// console.log("SOURCE ::"+srcPath);

// to go to parent folder use double dot( ex.  cd ..) cant achieved bt __dirname
// let destPath=path.join(__dirname,"..","..",'module 3-Node js','newFolder');
let destPath=path.join(__dirname,"..","..",'index.html');
// console.log("DEST ::"+destPath);

fs.copyFileSync(srcPath,destPath);