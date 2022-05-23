// reassign but not redclare but in same block {}
// throw error identifier has already been 



//scope --> block
//{

//}

// let a = 10;
// function fn() {
//     let a = 20;
//     console.log("4", a);//20
//     a++;//21
//     if (true) {
//         let a = 30;
//         a++;//31
//         console.log("9", a);//31
//     }
//     a++;//22
//     console.log("13", a);//22
// }
// console.log("15", a);//10
// fn();
// console.log("17", a);


// let fruit =
// function fn(){
// let fruit ="oranges";
// console.log("30",fruit);
// {
//     let fruit = "Apple";
//     console.log("33",fruit);
//     {
//         console.log("35",fruit);
//     }
// }
// console.log("38",fruit);
// }

// block is area inside the curly braces
// let is block scope 
// var is function scopr

console.log(a);
let a=10;
//ReferenceError: Cannot access 'a' beforenitialization