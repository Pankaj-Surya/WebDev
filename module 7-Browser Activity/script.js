//document

//read
//============
let ele  = document.querySelector(".next_h1");
console.log("Line number 5 : ",ele);
//array of ele
let allh1s =document.querySelectorAll("h1");
console.log("Line number 6 : ",allh1s);


//content get 
//===========


let inputEle = document.querySelector("input");
console.log("Line number 13 : ",inputEle.value);

//rest of html ele
let para = document.querySelector("p");
let text = para.textContent;
console.log("Line number 18 : ",text);


//get Attribute
let anchorEle = document.querySelector("a");
let output =anchorEle.getAttribute("href");
console.log("Line number 24 : ",output);



// create
//============
//1.create p tag
let pElem = document.createElement("p");

//2.content put
pElem.textContent = "Hello DOM";
let newpEle = pElem.cloneNode(true);

//3.placed on a child of a body
let body =document.querySelector("body");

// it will add last
body.appendChild(newpEle);

// befor an ele
body.insertBefore(pElem,ele)
//set Styling
pElem.style.backgroundColor="lightgreen";

//**********update****************** */
  
    //content 
    newpEle.textContent ="modified"
    
        //styling
    pElem.style.backgroundColor = "lightblue";

    //attribute
    anchorEle.setAttribute("href","")

//**********delete****************** */

ele.remove();