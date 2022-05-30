//1. function statement

function fn(){
    console.log("I am statement");
}

fn();

//2. function expression
let fnAdressHolder = function() {
    console.log("I am function expression ")
}

fnAdressHolder();

//3. IIFE : immediately invoke fun exprssion 

(function(){
    console.log("I am IFEE");
})()

//4. arrow --> function expression (syntax sugar)
// react
let arrFn = () =>{
    console.log("I am an arrow fn");
}
arrFn();


//==========================================
// function statement
function fn() {
    console.log("I am a statement");
}
fn();

// function expressions
let fnAddressHolder = function () {
    console.log("I am a function expression")
}
fnAddressHolder();

// you can access access IIFE function outside
// IIFE-> immediately invoke function expression
(function IIFEE() {
    console.log("I am IFEE");
})()

// arrow -> function expression (syntax sugar)
// react
let arrFn1 = () => {
    console.log("I am an arrow fn");
}
arrFn();



