let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

let path = require("path");
function returnFolderName(fileName) {
   let extname = path.extname(fileName);
   //console.log(extname.slice(1));
   extname =extname.slice(1);
   for(let key in types){
       let totalExt = types[key];
      // console.log(totaExt); //array of ext [ ....]
      //console.log(key);
      for(let i=0; i<totalExt.length;i++){
         // console.log(totaExt[i]); // all ext one by one
         if(totalExt[i]==extname){
             console.log(key);
             return;
         }
      }
   }
   console.log("others")
    
}

returnFolderName("resume.docx"); //-> document
returnFolderName("xyz.abc");   //-> others

// organize
            // organizedFiles
            //         media
            //         archives
            //         documents
            //         app
            //         other



            