//Q. what is web-scrapping?
//A. Go to any website like amazon,cricbuzz and extract the phone data,
//   match data and store inside pdf file  

//request-response cycle
// browser request server and server response 
// npm ===>like play store in mobile

//request package -->npm i request
//Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.


const request = require("request"); //to get html of web app
const jsdom = require("jsdom"); // to select the element from html of web app 
const { JSDOM } = jsdom;

const link = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/delhi-capitals-vs-mumbai-indians-2nd-match-1304048/match-impact-player'
request(link, cb
);

function cb(error, response, body) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    }
    else {
        //console.log('body:', body); // Print the HTML for the Google homepage.
        const dom = new JSDOM(body);
        const document=dom.window.document; // "Hello world"
        let win=document.querySelector(".status-text span").textContent;
        console.log(win);
        let teamName=document.querySelectorAll(".team .name-link");
        console.log(teamName[0].textContent);
        console.log(teamName[1].textContent);
    }
}

//Q. can we pass function as srgument to function?
//A. when pass function as parameter or argument to other function called as callback function.similar
// request('http://www.google.com', function (error, response, body) { });

//1.give a match link & find high wicket taker
//2.give a match link & find each player full info
