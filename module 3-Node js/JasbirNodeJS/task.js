
let fs = require("fs");
let path=require("path");

modules = ["javascript", "browser","react","git"];

lectures =["lec1", "lec2" , "lec3","lec4",]

for(let i=0; i<modules.length;i++){
  
   // console.log(modules[i]);
   // fs.mkdirSync(modules[i]);
   if(!fs.existsSync(modules[i])){
    fs.mkdirSync(modules[i]);
    let pathOfmodule=path.join(__dirname,modules[i]);
    for(let j=0; j<lectures.length;j++){
      //  fs.mkdirSync("");
      let contentOfFolder=fs.readdirSync(pathOfmodule);
      console.log(contentOfFolder);

        //let pathOfFOlderExist=fs.existsSync(pathOfFOlder);
    }
   }



   





}


