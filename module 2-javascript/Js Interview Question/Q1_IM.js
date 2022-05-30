// function printArrFn(){
//     let arr = [];
//     for(let i=0; i<3;i++){
//          let smallArr = [1,2,3,4];
//         //adding reference to the array-->printI = reference not function call
//         arr.push(smallArr);
//     }
//     return arr;
// }

// let arrFn = printArrFn();
// //console.log(arrFn);

// console.log("Array Push");
// arrFn();


//=================================
function printArrFn(){
    let arr = [];
    for(let i=0; i<3;i++){
       function printI(){
        console.log(i);
       }
        //adding reference to the array-->printI = reference not function call
        arr.push(printI);
    }
    return arr;
}

let arrFn = printArrFn();
//console.log(arrFn);

console.log("Print  Push");
// arr0 pe jo fn ka address usse call kar do
console.log("arrFn0",arrFn[0]);// [Function: printI]
console.log("arrfn1",arrFn[1]);// [Function: printI]
console.log("arrFn2",arrFn[2]);// [Function: printI]


console.log(" Call")
// arr0 pe jo fn ka address pey jo value hai usse call kar do
arrFn[0]();//0
arrFn[1]();//1
arrFn[2]();//2


function print(){
    console.log("Hello");
}

//without this call function wiull not be executed 
//print();
let anotherName =print;
let emptyArr = [];
emptyArr[0] = print;
print();
anotherName();
emptyArr[0]();