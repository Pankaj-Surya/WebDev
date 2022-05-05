// Title: 
// Invincible Strings

// Meta-Tags:
// Javascript, JS, interview, questions, interview questions, arrays,objects,practice

// Description:
// Find output of the following:

// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a);
// console.log(b);

// Options: 
// A)
// Error


// let a = "This only works if and only if";
// console.log("index of only "+a.indexOf("only")); //5

// let b = a.slice(a.indexOf("only"));
// console.log(" last index of only "+b.lastIndexOf("only")); //18
// console.log(b);
// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log("A is"+a); 
// console.log("B is "+b);

// B)
// This only works if and only if
// only works if and only if

// C)
// This only works if and only if
// only works if and inly if

// D)
// This only works if and only if
// This only works if and only ifTitle: 
// Invincible Strings

// Meta-Tags:
// Javascript, JS, interview, questions, interview questions, arrays,objects,practice

// Description:
// Find output of the following:

// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a);
// console.log(b);

// Options: 
// A)
// Error

// B)
// This only works if and only if
// only works if and only if

// C)
// This only works if and only if
// only works if and inly if

// D)
// This only works if and only if
// This only works if and only if


let a = "This only works if and only if";

let b = a.slice(a.indexOf("only"));//only works if and only if

let c = b.lastIndexOf("only");//only if

b[c] = "i";

console.log(a); //This only works if and only if
 console.log(b);//
 