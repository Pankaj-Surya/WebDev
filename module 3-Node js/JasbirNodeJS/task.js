
let fs = require("fs");
let path=require("path");

let modules = ["javascript", "browser","react","git"];

let lectures =["lec1", "lec2" , "lec3","lec4",]

//path build
let webDevFolderPath = path.join(process.cwd());

// does this path exist
 if(fs.existsSync(webDevFolderPath)){
     // i dont need to create it
                  
 }


// for(let i=0; i<modules.length;i++){
  
//    // console.log(modules[i]);
//    // fs.mkdirSync(modules[i]);
//    if(!fs.existsSync(modules[i])){
//     fs.mkdirSync(modules[i]);
//     let pathOfmodule=path.join(__dirname,modules[i]);
//     for(let j=0; j<lectures.length;j++){
//       //  fs.mkdirSync("");
//       let contentOfFolder=fs.readdirSync(pathOfmodule);
//       console.log(contentOfFolder);

//         //let pathOfFOlderExist=fs.existsSync(pathOfFOlder);
//     }
//    }


//}


