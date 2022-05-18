

//command

// 1.help command -->List of coomand
//                   node cli.js help


// 2.tree command -->print tree view 
//                   node cli.js tree

// 3.organize     -->organize files in folder 
//                   node cli.js organize


// take and input
// nodejs cli.js help --> print help command executed
// nodejs cli.js tree --> print tree command executed
// nodejs cli.js organize --> print organize command executed


// let helpFnObj = require("./Commands/help");
// let treeObj = require("./Commands/tree");
// let organizeObj = require("./Commands/organize");


// let inputArr = process.argv.slice(2);
// let command = inputArr[0];  // input 1
// let dirPath = inputArr[1];  // input 2


// // switch(command){
// //     case "help" :
// //         console.log("Help Command Excecuted")
// //         break;
// //     case "tree" :
// //         console.log("Tree Command Executed",dirPath != undefined ? dirPath : process.cwd());
// //         break;
// //     case "organize" :
// //         console.log("Organize Command Executed ",dirPath != undefined ? dirPath : process.cwd());
// //         break;
// //     }

    
//     switch(command){
//         case "help" :
//             helpFnObj.helpFn();           
//             break;
//         case "tree" :
//             treeObj.treeFn(dirPath);
//             break;
//         case "organize" :
//             organizeObj.organizeFn(dirPath);
//             break; 
//          default :
//            console.log("Wrong Command . Type help to see all list of commands");
//         }






// 1.take and input 
// nodejs cli.js help -> print Help command executed
// nodejs cli.js tree -> print tree command executed
// nodejs cli.js organize -> print tree command executed
let helpFnObj = require("./commands/help");
let treeFnObj = require("./commands/tree");
let organizeFnObj = require("./commands/organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let dirPath = inputArr[1];
// let listofThingsInCurrentFolder = fs.readdirSync(__dirname);
switch (command) {
    case "help":
        helpFnObj.helpFn();
        break;
    case "tree":
        treeFnObj.treeFn(dirPath);
        break;
    case "organize":
        organizeFnObj.organizeFn(dirPath);
        break;
    default:
        console.log("Wrong command . Type help to see the list of all the commands");
}