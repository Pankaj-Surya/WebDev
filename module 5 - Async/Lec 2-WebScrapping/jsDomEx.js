//npm i jsdom

const jsdom = require("jsdom");
const fs =require("fs");
const JSDOM = jsdom.JSDOM;

let htmlContent = fs.readdirSync("sample.html","utf-8");

//1. string form me --> html content provide
// pass to new JSDOM
let dom = new JSDOM(htmlContent);

//2. //no meaning
// document represent the whole html page
// window --> represnt the browser
//document --> html
// document is subpart of window
let document = dom.window.document;

//3. logic -->help to get your html elements if you pass a selector

// css selector --> first occurense of html elememt
document.querySelector();

// css selector --> All occurense of html elememt
// return --> array ke andar elements
const allPs = document.querySelectorAll("p");
document.querySelectorAll();
console.log(allPs.length);
// constant -->
let firstPkaContent = allPs[0].textContent;
console.log("first p Element : ",firstPkaContent);



