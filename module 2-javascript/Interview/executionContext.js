// console.log(a); //Error

// let a="Hi"  //Error:ReferenceError: Cannot access 'a' before initialization

//var a="hi" // undefined

// Execution Context
// Has two object 
// 1.global objct 2.this object
//"Memory allocates first then execution happens"

// Javascript is single threaded -->line by line
// Memory alocates first

// GLOBAL EXECUTION CONTEXT
//__________________________________
// Memory         |   code          |
// _________________________________
// a:undefined    |   var a=10      |
// fun: 8k=Add    |   fun(){.....}  |
// c:undefined    |    c=30         |
// __________________________________

// call stack has global execution context

//  |             |
//  |             |
//  |             |
//  |             |
//  |             |
//  |_____________|
//  |             |
//  |             |
//  |   EC-->     |
//  |   fun()     |
//  |_____________|
//  |   GEC       |
//  |             |
//  |_____________|


// var a=10;
 
// function fun(){
//     var b=20;
//     console.log(b);
// }

// var c=20;

// fun();

// Example : 2

// console.log(a); //undefined

// var a=10;

// console.log(a); //10

// function fun(){
//     var b=20;
//     return b;
// }

// console.log(c); //undefind
// var c=20;

// var d=fun();   //call stack inside EC created 
// console.log(d)//20



// GLOBAL EXECUTION CONTEXT
//__________________________________
// Memory         |   code          |
// _________________________________
// a:undefined/10 |   var a=10      |
// c:und/und/20   |   var b=20      |
// d:undefined    |   var c=20      |
// fun: 8k=Add    |   fun(){.....}  |
// c:undefined    |    c=30         |
// __________________________________


// Example : 3
// fun();   //undefined

// var fun=function(){
//     console.log("Hello")
// }

// fun();  // fun is not function

// GLOBAL EXECUTION CONTEXT
//__________________________________
// Memory         |   code          |
// _________________________________
// var:fun:undef  |                 |
// __________________________________

//  |             |
//  |             |
//  |             |
//  |             |
//  |             |
//  |_____________|
//  |             |  _______
//  |             | /
//  |   EC-->     |/
//  |   fun()     |
//  |_____________|
//  |   GEC       |
//  |             |
//  |_____________|


// Hosting : 
//we can access before declare we didnt get error

// var  ::  redcalre    =yes
//          reintialize =yes
//          hosting     =yes 

// console.log(a);
// var a;
// a=20;
// console.log(a);

// a=30;
// console.log(a);

// var a=50;
// console.log(a);


// let  ::  redcalre    =no
//          reintialize =yes
//          hosting     =Temporary dead zone

// let a;
// a=20;
// console.log(a); //20

// a=30;
// console.log(a);  //30

// var a=50;
// console.log(a);  //error


// const  ::  redcalre    =no
//            reintialize =no
//            hosting     =Temporary dead zone

// const a;
// a=20;  //error

// const a=20;
// console.log(a); //20

// a=30;
// console.log(a);  //error

// var a=50;
// console.log(a);  //error

//hoistd ==> before declare access
// TD    ==>  memory allocates but we cant access  

//       redclare  reintialize  hoisted
// var     Y           Y            Y
// let     N           Y            TD
// const   N           N            TD


//  WCAT PROJECT
// wcat commnad in detail search
//  cat -n song.txt



