
//map is higher order function on an array

function smallFn(arrElement){
 return arrElement+3;
}

let arr = [1,2,3,4,5];

let newArr = arr.map(smallFn);


console.log(arr);
console.log(newArr);

let arrStr =["Hello","Hi","Bye"];
function htmlConverter(){
    return `<h1></h1>`
}