// let a= 10;
// console.log("A",a);

// clouser - even 
function add(){
    let b=10;
    return function addSum(){
        console.log("addSum",b+10); 
    }
    
}

// let res=add();
// console.log("res",res());

Array.prototype.myFn =function () {
    console.log(this);
} 

const arr = [1,2,3,4,5,6,7,8,9,10];

arr.myFn();


Array.prototype.myMap = function(cb){
    let newArr = [];
    
    for(let i=0; i<this.length;i++){
        if(cb(this[i])) newArr.push(this[i]);
    }
    return newArr;
}

function sq(x){
    return x*x;
}
 
function isEven(x){
    return x% 2 ==0;
}
 
// let res = arr.myMap(sq);
let res = arr.myMap(isEven);
console.log("map",res)


