let path = require("path");
let fs = require("fs");

let modules = ["javascript", "browser","react","git"];

let webDevDirPath = path.join(process.cwd(),"Web Dev" );
console.log("=====>"+webDevDirPath);

if(fs.existsSync(webDevDirPath)){
   // do nothing 
   console.log("Web Dev folder already Exist");

}else{
    fs.mkdirSync(webDevDirPath);
}

// create module inside these
for(let i=0;i<modules.length;i++){
    let modulePath = path.join(webDevDirPath,modules[i]);
    console.log(modulePath);
    if(fs.existsSync(modulePath)){
        console.log(modules[i],"already exist");

    }else{
        fs.mkdirSync(modulePath);
    }
}


// take input from user like --> Git 4 --> O/p Inside Git - Lec1 Lec2 Lec3 Lec4





