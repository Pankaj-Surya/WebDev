const request = require("request"); //to get html of web app
const jsdom = require("jsdom"); // to select the element from html of web app 
const { JSDOM } = jsdom;


const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-10th-match-1254067/full-scorecard";
request(link,cb);

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    }
    else {
        //console.log('body:', body); // Print the HTML for the Google homepage.
        const dom = new JSDOM(html);
        const document=dom.window.document; // "Hello world"
        let batsmen=document.querySelectorAll(".batsman-cell.text-truncate.out a");
        //console.log(batsmen.length);
        for(let i=0;i<batsmen.length;i++)
        {
            let batsmanLink =batsmen[i].href;
           // console.log(batsmanLink);   // /player/rahul-tripathi-446763
           let completeBatsmanLink = "https://www.espncricinfo.com"+batsmanLink;
           //console.log(completeBatsmanLink);
           request(completeBatsmanLink,cb2);
        }
        
        
    }
}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerDetail = document.querySelector(".player-card-padding .player_overview-grid");
        let playerH5 = playerDetail.querySelectorAll("div h5");
        let fullName = playerH5[0].textContent;
        let DOB = playerH5[1].textContent;
        console.log("Full Name : ",fullName," Date of Birth : ",DOB);
    }
}

// function cb(error,response,html){
//     if(error){
//         console.log(error);
//     }else{
//         const dom = new JSDOM(html);
//         const document = dom.window.document;
//         let batsmen = document.querySelectorAll(".batsman-cell.text-truncate.out a");
//         for(let i=0;i<batsmen.length;i++){
//             let batsmanLink = batsmen[i].href;
//             let completeBatsmanLink = "https://www.espncricinfo.com"+batsmanLink;
//             // console.log(completeBatsmanLink);
//             request(completeBatsmanLink,cb2);
//         }
//     }
// }


// function cb2(error,response,html){
//     if(error){
//         console.log(error);
//     }else{
//         const dom = new JSDOM(html);
//         const document = dom.window.document;
//         let playerDetail = document.querySelector(".player-card-padding .player_overview-grid");
//         let playerH5 = playerDetail.querySelectorAll("div h5");
//         let fullName = playerH5[0].textContent;
//         let DOB = playerH5[1].textContent;
//         console.log("Full Name : ",fullName," Date of Birth : ",DOB);
//     }
// }

// Task : Project
//whole ipl 2021
//Every playername rums matches 4s 6s balls

// array
//excel