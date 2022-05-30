How js code executed ?

whenever a code executed you will get a global object and a this

every code in js 

in case of node :
1. global obj
2. this
3. code

in case of browser :
1. window obj 
2. this
3. code

in case 

Every code in js is located in bubble known as Execution context.like stack in other language.

Q.when execution context created ?
  when function is called.



the code that is outside the function --> is global area --> for that gloabt exection context ix created --> default execution context 

for code ---->1. memory allocated --> rules 
              2. code execution   --> rules 

EC has phases
1. Creation phase
2. Exection phase

EC -->       1. global obj 
             2. this
Creation     3. code memory allocation
                 1.variable -->undefined(Default)
                 2.function -->Memory Alocated(Default)

              


Execution --> left to right
              top to bottom


Excction context is always is created when function is called

       SCOPE
-------------------------

when fun dosent have variable or function --> it will look outside function defination

     Let Variable
---------------------------
 1.var variable --> Reassign it , redeclare it
 2.let variable --> reassign but not redclare but in same block {}
 throw error identifier has already been 

// block is area inside the curly braces
1.let is block scope 
2.var is function scope

 SCOPE , SCOPE CHAINING
--------------------------------------
1. let is block scope
2. Hoisting(memory allocation) for let variable is done wheree block is encountered
3. if no variable associated is not present in a block


console.log(a);
let a=10;
ReferenceError: Cannot access 'a' beforenitialization --> undefined set was done --> tmporary dead zone

** scope : area till which a given variable is available

 1.var --> function 
 2.let/ const --> block scope

scope chain : when a variable isnt available inside the current scope then we will look outside the outer scope till u are not able to find that variable

1.let and const

{                   |     
    {               |
        {           |
            {       |
 
            }       |
        }           
    }               
}    

2.var

fn(){
    fn1(){
        fn2(){
           
        }
    }
}


PROPERTIES OF VARIABLE
----------------------------
1. assingment
2. function are also be trated as a varaible --> variable is first citizen in js
3. pass to function as parameter 
4. return variable from a function


