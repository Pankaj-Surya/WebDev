// is folder created or not 

const fs= require("fs");

let input = process.argv.slice(2);

// input handle cases 
let moduleNeme = input[0];
let numberOfFolder = input[1];

let modulePath = path.join(process.cwd(),"Web Dev Demo",moduleNeme);

if(fs.existsSync(modulePath)){
    console.log(modulePath,"already Exist");
}else{
    fs.mkdirSync(modulePath);
}

// files create
for(let i=0;i<=numberOfFolder;i++){
    let lectureName = "Lecture"+i;
    //path 
    let lecturePath = path.join(modulePath,lectureName);
    if(fs.existsSync(lecturePath)){
        console.log(lecturePath+"already Exist");
    }else{
        // lecture creation 
        fs.mkdirSync(lecturePath);
    }
}