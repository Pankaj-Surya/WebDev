const request = require("request");
const jsdom = require("jsdom");
const fs= require("fs");
const path = require("path");
const pdfkit = require("pdfkit");


function getIssuePageHtml(url,topic,repoName){
    
        request(url,cb);
        function cb(err,response,html){
            if (err) {
                console.log(err);
            } else if (response.statusCode == 404) {
                console.log("page not found");
            }
            else {
                getIssues(html);
                 //console.log(html);
            }
        }

        function getIssues(html){
            const JSDOM = jsdom.JSDOM;
            // pass to newJSDOM 
            let dom = new JSDOM(html);
            // 2. // no meaning 
            // document represent the whole html page 
            let document = dom.window.document;
            let issuesEleArr = document.querySelectorAll(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
            console.log(issuesEleArr.length);
            let arr = [];
            for(let i=0;i<issuesEleArr.length;i++){
                let link = issuesEleArr[i].getAttribute("href");
                //console.log(link);
                arr.push(link);
            }
             // console.log(topic,"     ",arr);
            let folderPath =path.join(__dirname,topic);
            dirCreater(folderPath);
            let filePath = path.join(folderPath,repoName+".pdf");
            console.log(filePath);
            
            let text = JSON.stringify(arr);
            let pdfDoc = new pdfkit();
            pdfDoc.pipe(fs.createWriteStream(filePath));
            pdfDoc.text(text);
            pdfDoc.end();
        }
       
    
}


function dirCreater(folderPath){
    if(fs.existsSync(folderPath)==false){
        fs.mkdirSync(folderPath);
    }
}

module.exports = {
    getIssuePageHtmlFn: getIssuePageHtml
}
//module.exports = getReposePageHtml;