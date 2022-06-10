// npm i request

const request = require('request');
const fs =require("fs");
let url = 'http://www.google.com';

// request working
//reuest url,cb
//1. request to the given url
//2. response --> request function --> cb call put

request(url,cb);

//HTTP Requst 

// error --> if there is any error while executing
//response -->header+body
//body --> html

function cb(error,response,body){
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    if(error){
        console.log("error : ",error.message);
    }else if(response && response.statusCode ==404  ){
      console.log("Page not found");
    }else{
        console.log("body : ",body); // print the html for the google page
       // fs.writeFileSync("index.html",body);
       extractData(body);
    }
    console.log("After");
}

function extractData(html){

}

