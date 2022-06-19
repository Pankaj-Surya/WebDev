=================================
      ASYNC
================================
1.Aysnc ==>parallely executee
2.async function -->nodejs --> confirmation -->  cb --> first parameter reserve for error

frConf--> data confirmation function

fs.readFile("f1.txt",frConf)

function frConf(err,data){
   if(err){
       console.log("Err "+err);
   }else{
       console.log("data "+data)
   }
}


==========================================
 Q.console.log("data "+data)  vs console.log  ("data ",data) showing buffer in console
       //first waale me type conversion hui hai
      // buffer string yani utf8 me convert ho gya hai

============================================
Async Architecture
===========================================
Exectuion of async

1.First GEC created for given program
2.for varaible --> undefined and for function --> memory allocated in heap area
3.Code start executing line by line in call stack
4.in case of normal function after GEC. the next function excected in call stack after execution that removed from the stack
5.in case of async function not dirctely executed in call stack. first async function go to Node API area then  in case readfile it will read.
6.then after doing readFile job comes to --> call back queue 
7.if call stack is empty then --> event loop push the function to call stack

=========================================
async function given and handle by Node JS
                 |
                 removed from call stack and send to Node API, call back call
user/ dev --> only call those function.

==========================================
NOde JS ==>Aysnc function exection
============================================
1.Node API/browser API ==> All async function executed in Node API
2.Queue/waiting/call   ==> after executing our async function node js push the call back into queue with the output.
3.Main/ call stack  ==> Js code execution 
                node js remove any async function as it is pushed on the stack
4.Event Loop ==> It check if call stack is empty then it pushes your call back to call stack.

============================
Node js ---> Non Blocking
============================
1.Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes.
2.Non-Blocking: It refers to the program that does not block the execution of further operations. Non-Blocking methods are executed asynchronously. Asynchronously means that the program may not necessarily execute line by line

=============
Task -1
=============
1.let we have three file we want to read three file f1,f2,f3 read pallel;y but should not hamper other  code.
2.we have to  create file4 which aggregate of f1,f2,f3


callback --> it is function that is passd to another function and then that function will call your call back function
Ex. readFile is function inside that as para passed another function.

=========================================
       Web Scrapping
=========================================
   It is process in which  we convert unstructured data(HTML Data) present in website into structure format(pdf, excel).

   Parsing ==> Reading

  STEPS
 -----------------------------------------------
 1. Request Response (lib --> Request) latest (axios/fetch)
 2. Parse -->html read +Extract(lib -->jsdom)
 3. save as txt, excel, pdf.
    
HTTP Packet has 
1.Header
2.Body


CSS Selector
--------------------------
 feature of selector
 1.change 
 2.style
 3.get 


Js Dom Lib --> has function --> give html for given selector




DataScapping Project
===========================
1.home page click on read more every match data
2.go to scorecard of every match

task 
--------------


17 jun 2022
-----------------------


IV
------

1.what is webscrapping?
2.why we build this project?
3.what is callback?
4.JsDom -->Alternative(cheeria)
5.how you reach to jsdom?
  while learning Nodejs we know only request but we get html content
  so parse/manupulate that 
**



In NodeJs
---
single thread


**undrestand whole code at functional level