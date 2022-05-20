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

