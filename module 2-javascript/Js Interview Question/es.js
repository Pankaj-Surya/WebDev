
console.log(global +"gloabl");
console.log(this +"this");
console.log("hello");

//console.log(b);
console.log("a",a); // undefined
var a;
a=10;
console.log("a",a);

//  fn(); // it will executed becoz memory allocated to function first
// function fn() {
//     console.log("I am a function");
// }

// fn();

 //

 fn(); // No I am real also

// function fn() {
//     console.log("I am a real");
// }

// function fn() {
//     console.log("No I am a real");
// }

// function fn() {
//     console.log("No I am a real also");
// }


console.log("35",a);
var a=10;
function fn() {
    console.log("38 inside fun",a);
    var a=20;
    console.log("41 inside fun",a); 
}
console.log("43",a);
fn();
console.log("45",a);





