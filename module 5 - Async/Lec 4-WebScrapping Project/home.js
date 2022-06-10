// Q1 print the result 
// npm i request jsdom 
const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom");
const allMatchPageObj = require("./allMatchPage");
let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423";
request(url, cb);

function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
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

    let element = document.querySelector(".ds-block.ds-text-center.ds-uppercase.ds-text-ui-typo-primary.ds-underline-offset-4")
    let link = element.getAttribute("href");
    // console.log("link", link);
    let AllMatchPageKaLink = "https://www.espncricinfo.com" + link;
    console.log(AllMatchPageKaLink);
    // allmatch page
    allMatchPageObj.AllmatchFn(AllMatchPageKaLink)

}