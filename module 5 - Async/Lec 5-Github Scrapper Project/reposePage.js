const request = require("request");
const jsdom = require("jsdom");
const { link } = require("fs");
const getIssuePageObj = require("./issue");

function getReposePageHtml(url,topic){
    {
        request(url,cb);
        function cb(err,response,html){
            if (err) {
                console.log(err);
            } else if (response.statusCode == 404) {
                console.log("page not found");
            }
            else {
                getReposLink(html);
                 //console.log(html);
            }
        }
        function getReposLink(html){
            const JSDOM = jsdom.JSDOM;
            // pass to newJSDOM 
            let dom = new JSDOM(html);
            // 2. // no meaning 
            // document represent the whole html page 
            let document = dom.window.document;

            let headingsArr = document.querySelectorAll(".f3.color-fg-muted.text-normal.lh-condensed");
             console.log(topic);
            for(let i=0; i<8; i++){
                let twoAnchors = headingsArr[i].querySelectorAll("a");
                let link = twoAnchors[1].getAttribute("href");
                //console.log(link);
                let fullLink = `https://github.com${link}/issues`;
               // console.log(fullLink);
                let repoName = link.split("/").pop();
                getIssuePageObj.getIssuePageHtmlFn(fullLink,topic,repoName);
            }
          
            console.log("**********************");
        }
    }
}

module.exports = {
    getReposePageHtmlFn: getReposePageHtml
}
//module.exports = getReposePageHtml;