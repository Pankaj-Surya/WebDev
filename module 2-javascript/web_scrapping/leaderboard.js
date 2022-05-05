// PROJECT ::
//1. access all bowler name and wicket
//2. from that data we will find max wicket taker

//Step 1: from url whole tournament we have to go each match score details link
//Step 2: we have 3 matches link
//        MI VS DC
//        [{PlayerName,Inning,Runs,Balls}
//         {Pant,1,53,30}
//         {rohit,1,50,20}]            
//          
//        lets say next match DC VS CSK
//        [{PlayerName,Inning,Runs,Balls}
//         {Pant,2,100,60}
//         {rohit,1,50,20}
//         {jadu,1,50,20}]  
//
//Step 3: check object of player is present or not 
//        if present then update not create new object

const request= require("request");
const jsdom = require("jsdom"); // to select the element from html of web app 
const { JSDOM } = jsdom;

const link = 'https://www.espncricinfo.com/series/ipl-2021-1249214/match-results';

let leaderboard = [];
request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); 
    }
    else {
        const dom = new JSDOM(html);
        const document=dom.window.document; // "Hello world"
        let allScorecardTags=document.querySelectorAll('a[data-hover="Scorecard"]');
        //console.log(allScorecardTags.length);
        for(let i=0;i<allScorecardTags.length;i++){
            let link=allScorecardTags[i].href;
            let completeLink="https://www.espncricinfo.com"+link;
           // console.log(completeLink);
           request(completeLink,cb2);
        }
         // console.log(leaderboard); //empty
    }
}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenRow = document.querySelectorAll(".table.batsman tbody tr");
        for(let i=0;i<batsmenRow.length;i++){
            let cells = batsmenRow[i].querySelectorAll("td");
            if(cells.length == 8){
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;
               
                // console.log("Name : ",name,"Runs : ",runs,"Balls : ",balls,"Fours : ",fours,"Sixes : ",sixes);
                processPlayer(name,runs,balls,fours,sixes);
            }
           
        }
       // console.log(leaderboard);

    }
}

// processPlayer('Rohit','15','4','2','4');
// processPlayer('Virat','50','20','4','3')
// processPlayer('Rohit','40','20','1','2');
// processPlayer('Virat','50','20','4','3');
// processPlayer('Dhoni','30','20','4','2')
// console.log(leaderboard);

//check if player exist then add previous match runs , bowls to same obj
// if player not exist then create new object
function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Name == name){
            //will do some work here
            playerObj.Runs+=runs;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name:name,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    leaderboard.push(obj);
    //console.log(leaderboard);
}