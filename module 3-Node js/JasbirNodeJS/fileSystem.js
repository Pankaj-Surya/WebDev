// node js please give access of od module
let os = require("os");

//which os is installed
console.log(os.arch());
console.log("--------------------------");


//give data about cpu
console.log(os.cpus());
console.log("--------------------------");

//networking 
console.log(os.networkInterfaces());
console.log("--------------------------");

//os type
console.log(os.platform());
console.log("--------------------------");

// host name
console.log(os.hostname());

