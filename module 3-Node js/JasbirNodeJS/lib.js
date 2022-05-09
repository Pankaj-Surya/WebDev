function LibFn(){
    console.log("I m Lib Fn");
}

function Inner(){
    console.log("I am Inner");
}

let a =10;
// in js we can send only function , variable to another
// file we cant sent the whole 
//nodejs

module.exports = {
    fn: LibFn,
    varName: a
}