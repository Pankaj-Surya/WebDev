// Q1 print the result 
// npm i request jsdom 
const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom");

let url = "https://practice.geeksforgeeks.org/explore?page=1&company[]=Amazon&sortBy=submissions";
request(url, cb);

function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        //console.log("content recieved");
       // console.log(body);
        extractData(body); //html code
    }
}
function extractData(body) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM 
    let dom = new JSDOM(body);
    // 2. // no meaning 
    // document represent the whole html page 
    let document = dom.window.document;

  //  let output = document.querySelectorAll(".infinite-scroll-component.explore_problems__Ihblh div>div>div>p");
  let output = document.querySelector("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)");
  //let resultElem =output.textContent;
//   let result = "<div>"+resultElem+"</div>";
//   fs.writeFileSync("abs.html",result);
console.log(output);

  // textcontent 
//   let res = resultElem.textContent;
//     // textcontent 
//    // let res = resultElem.innerHTML;
//     console.log("result :", output);
//     // using document and your selectors you find element in html page 
//     console.log("reached for parsing");


}

//.infinite-scroll-component.explore_problems__Ihblh>div>div>div>p