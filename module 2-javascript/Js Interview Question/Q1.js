function printArrFn(){
    let arr = [];
    for(var i=0; i<3;i++){
        function printI(){
            console.log("i",i);
        }
        //adding reference to the array-->printI = reference not function call
        arr.push(printI);
    }
    return arr;
}

let arrFn = printArrFn();
//console.log(arrFn);

console.log("var in for loop");
arrFn[0]();//3
arrFn[1]();//3
arrFn[2]();//3


//===============================
function printArrFn1(){
    let arr = [];
    for(let i=0; i<3;i++){
        function printI(){
            console.log("i",i);
        }
        //adding reference to the array-->printI = reference not function call
        arr.push(printI);
    }
    return arr;
}

let arrFn1 = printArrFn1();
console.log("var in for loop");
arrFn1[0]();//3
arrFn1[1]();//3
arrFn1[2]();//3