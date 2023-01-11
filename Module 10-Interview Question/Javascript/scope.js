
//var : declare and intialize in

// {
//     b=10; // anything outside fn var consider as global
// }
// console.log("b",b);

// function fun(){
//     var a =10;
//     console.log(a); // fn scope
// }

// fun();
// console.log(a);  // error : fn scope


// let 

// let has block scope
// { 
//    console.log("b",b); // 10
//    let b=10;
//    console.log("b",b); // 10
// }

//console.log("b",b); // error :  not defined

// function fun(){
//     console.log(a);
//     let a =10;
//     console.log(a); // 10
// }

// fun();
// console.log(a);




// before declare
console.log("a",a);
// console.log("b",b);
console.log("c",c);
var a;
let b;
const c =10;




        
//      scope                          |        let           |       var           |      const
// --------------------------------------------------------------------------------------------------------
//1.    global                                 yes                    yes                   yes
//2.    fn-dec                                 no                     yes                   no
//3.    block                                  yes                    no                    yes
//4.    redecalre                              no                     yes                   no
//5.    reintialize                            yes                    yes                   no
//6.    before declare and intailize           error                  tdz-undef


