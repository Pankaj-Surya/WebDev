// Q1 print the result 
// npm i request jsdom 
const request = require('request');
const fs = require("fs");
const path = require("path");
const jsdom = require("jsdom");
const getReponsePageObj =require("./reposePage");

let url = "https://github.com/topics";

request(url,cb);

function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
         //console.log(body);
        getTopicLinks(body);
    }
}

function getTopicLinks(body) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM 
    let dom = new JSDOM(body);
    // 2. // no meaning 
    // document represent the whole html page 
    let document = dom.window.document;

    let linkElemArr = document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i=0; i<linkElemArr.length;i++){
        let href = linkElemArr[i].getAttribute("href");
        //console.log(href);
        let topic = href.split("/").pop();
       // console.log(topic);
        let fullLink = "https://github.com/"+href;
        //console.log(fullLink);
        getReponsePageObj.getReposePageHtmlFn(fullLink,topic);
        //getReposePageHtml(fullLink);
        
    }
    //console.log(linkElemArr);


    // let element = document.querySelector(".ds-block.ds-text-center.ds-uppercase.ds-text-ui-typo-primary.ds-underline-offset-4")
    // let link = element.getAttribute("href");
    // // console.log("link", link);
    // let AllMatchPageKaLink = "https://www.espncricinfo.com" + link;
    // console.log(AllMatchPageKaLink);
    // // allmatch page
    // allMatchPageObj.AllmatchFn(AllMatchPageKaLink)

}