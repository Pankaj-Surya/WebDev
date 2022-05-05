const cp=require('child_process');
console.log(cp);


// open calculator with the help of this file
// cp.execSync("calc-calculator");

//open vscode with child process
// cp.execSync("code");

// for open output of other file in this file
let content =cp.execSync("node test.js"); 
// if we dont conact it will give result in binary form
console.log(""+content);
console.log("output of test.js file :"+content);

