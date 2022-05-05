//1. input --> Dir path given
//2. create --> organized_files --> directory
//3. indentify the  categories of all  files present in that input directory
//4. copy /cut files to that organized_files directory inside of any category folder

let fs=require("fs");
let path=require('path');




//1. input --> Dir path given
//first two input is path of node and current file so we start from 2
let inputArr=process.argv.slice(2);


//inputArr[0]='hiii';
console.log(inputArr);

organizeFn(inputArr[1]);   //calling    

//2. create --> organized_files --> directory
function organizeFn(dirpath)
{
    if(dirpath==undefined)
    {
        console.log("please enter valid dir path");
    }
    else
    {
        let doesExist=fs.existsSync(dirpath);
        if(doesExist)
        {
            //organized_files --> directory
           let destPath=path.join(dirpath,"organized_files");
           if(fs.existsSync(destPath))
           {
               fs.mkdirSync(destPath);
           }
        }

    }
    //organizerHelper(dirpath,destPath);
}

//3. indentify the  categories of all  files present in that input directory
// function organizerHelper(src,dest)
// {
//   // Read all files from input dir
//   let childAddress=fs.readdirSync(src);
//   let isFile=fs.lstatSync

// }

// function getCategory(name)
// {

// }

// function sendFiles(srcFilePath, dest,category)
// {

// }