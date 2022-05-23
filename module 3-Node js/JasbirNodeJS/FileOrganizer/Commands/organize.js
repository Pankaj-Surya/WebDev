// function organizeFn(dirPath){
//     console.log("Organize Command Executed ",dirPath != undefined ? dirPath : process.cwd());
// }

// module.export ={
//     organizeFn : organizeFn
// }
let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function organizeFn(dirPath) {
    console.log("Organize command Executed with the path",
        dirPath != undefined ? dirPath : process.cwd());
        organizeHelper(dirPath);
    }

function organizeHelper(dirPath){
    //Approach  
    //1.create an organized_dir in dirPath
    //2.read the content of this dirPath
    //3.only get the files 
    //4.check the ext name
    //5.copy files from clutter(unorganized files folder) to one of the type of folder (category) inside organized_dir 
    

    //1.create an organized_dir in dirPath
    let organizeddirPath = path.join(dirPath,"organized_dir");
    let doesorgaizedFolderExist=fs.existsSync(organizeddirPath) == false;
    if(doesorgaizedFolderExist ==false) {
     fs.mkdirSync(organizeddirPath);
    }
    let names = fs.readdirSync(dirPath);
    for(let i=0; i<names.length; i++){
        
    }

}   





module.exports = {
    organizeFn: organizeFn
}