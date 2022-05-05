
// Function with no argument no return
function sayHello()
{
    console.log("Hello from function");
}

sayHello();

// Function with para with no return
function sum(num1,num2)
{
    let add=num1+num2;
    console.log(add);
}

sum(1,5);

// Function with return type and para
function mul(num1,num2)
{
    return num1*num2;
}
let ans=mul(2,2);
console.log(ans);

// How to store the fuction not in prohramming laguage
// functions are first class citizen --store in var
let a=function sub(num1,num2){
        return num1-num2;
       }
console.log(a(10,5));

//IIFE imde invoke function
(function(){
console.log("Hello from IIFE");
})();

(function(){
console.log("HII from IIFE 2");
})();

//IIFE with para
(function(num1,num2){
 console.log(num1/num2);
})(10,5);

(function(num1,num2){
 console.log(num1+num2);
})(100,5);