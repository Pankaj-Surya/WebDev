const fs=require("fs");

// console.log("Before ");

// let content = fs.readFileSync("file.txt");

// console.log(content+" ");

// console.log("After");


// ASYCNHRONOUS ==> readFile('filename',cb)
//                  parallely line of code executes
// SYNCHRONOUS  ==> readFileSync() 
//                  line by line code execcute
// n number of lines of code
 
// console.log("Before ");

//  fs.readFile("file.txt",cb);
//  fs.readFile("f2.txt",cb2);

// function cb(error,data){
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log(data+"");
//     }
 
// }

// function cb2(error,data){
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log("file 2 data : "+data);
//     }
 
// }

// //console.log(content+" ");

// console.log("After");

console.log("Before ");

 fs.readFile("file.txt",function (error,data){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(data+"");
        fs.readFile("f2.txt",function (error,data){
            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log("file 2 data : "+data);
            }
         
        });

    }
 
});

// call back hell concept

// function cb(error,data){
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log(data+"");
//         fs.readFile("f2.txt",function (error,data){
//             if(error)
//             {
//                 console.log(error);
//             }
//             else
//             {
//                 console.log("file 2 data : "+data);
//             }
         
//         });

//     }
 
// }



//console.log(content+" ");

console.log("After");

//Call Stack
//
//Node API