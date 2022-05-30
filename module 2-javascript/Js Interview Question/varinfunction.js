// assign
let a=10;
let b=20;
a=b;
console.log("a",a);

//address copy
let arr1 =[1,2,3,4];
let arr2 =[5,6,7];
arr1=arr2;
console.log("arr1",arr1);

// function fn(param){
//     // what does param contains here ?? --> param has reference of arr1
//     console.log("param",param);

// }
// fn(arr1);

// function fn1(){
//     let obj ={name:"jasbir"}
//     return obj;
// }

// // this rval also contains the regerrence of obj object
// let rVal = fn1();
// console.log("rVal",rVal);


function fn(){
    console.log(" fn is a function");
}
// you can put address of fn in variable anotherFn
let anotherFn = fn
// assingment
// function are also be trated as a varaible --> variable is first citizen in js
// pass to function as parameter 
// return variable from a function
