// Description: Find output of the following:

// let a;

// console.log(a);

// function A() { let a = 2; console.log(a);

// function C() { console.log(a);

// function D() {
//   console.log(a);

//   a = 2;
// }
// D();
// a = 3;
// } C(); }

// function B() { let a; console.log(a);

// function E() { a = 6; console.log(a);

// }

// a = 2; E(); console.log(a); }

// function F() { console.log(a); a = 2; }

// a = 3;

// F(); B(); A();

// Options: A) Error

// B) undefined 3 undefined 6 6 2 2 2

// C) undefined 3 undefined 6 6 3 3 3

// D) 2 2 2 2 2 2 2 2

//Output: undefined 3 undefined 6 6 2 3 2

let a;//undefined/3/2/2/2/3

console.log(a);//undefined

function A() { 
  let a = 2; 
  console.log(a); //2

  function C() { 
    console.log(a);//3

  function D() {
  console.log(a);//2
   a = 2;
  }

  D();
  a = 3;
  } 
  C();
 }

function B() { 
  let a;
  console.log(a);//undefined

  function E() { 
   a = 6; 
   console.log(a);//6
  }

   a = 2;
   E();
   console.log(a); //6
 }

function F() {
   console.log(a); //3
    a = 2;
   }

a = 3;

F(); 
B();
 A();