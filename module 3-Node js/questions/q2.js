let fs=require("fs");
let path=require("path");


// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

// sol ==> make multiple folder
//let arr=["Audio","Video","Software","Application","others"];
// Problem => inside application folder abc.pdf e

let arr=["Audio","Video","Software","Document","Application","others"];


let nameArr=['abc','efg','xyz','def'];

// correspond to arr 
let extArr= ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

// create organise folder
let oraginsePath=path.join(__dirname,"Organise");

if(!fs.existsSync(oraginsePath))
fs.mkdirSync(oraginsePath);

// inside organise folder --> make audio video folder --> inside that create file like abc, efg with ext like mp3, mp4 
for(let i=0;i<arr.length;i++)
{
    // /Audio , /Video , /Document
    let folderKaPath=path.join(oraginsePath,arr[i]);
    if(!fs.existsSync(folderKaPath))
    fs.mkdirSync(folderKaPath);

    for(let j=0;j<nameArr.length;j++)
    {
        //  abc.mp3 , efg.mp4
        let fileName=nameArr[j]+extArr[i];
        // Audio/abc.mp3
        let fileKaPath=path.join(folderKaPath,fileName);
        fs.writeFileSync(fileKaPath,"");
    }
}