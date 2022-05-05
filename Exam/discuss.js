// let a;//undefined

// function func(){
//     let a=5;
//     console.log(a);
// }

// a=10;
// console.log( a);//10
// func();//5


//===========================

// let b;//undefined

// function func(){

//     console.log(b);//10
// }

// b=10;
// console.log(b);//10
// func();//10

//===========================

//lexical scope

// let a;//undefined

// function func(){
//   let b=5;// lexical scope
//   let fn2=function(){
//       console.log(b);//5 //store parent var also
//   } 
//   fn2();
// }

// a=10;//10
// console.log(a);//10
// func();


let a;//undefined

function func(){
  let a;
  console.log(a);//undefined
  a=5;
}

a=10;//10
console.log(a);//10
func();