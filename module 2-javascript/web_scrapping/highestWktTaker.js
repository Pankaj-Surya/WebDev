const request= require("request");
const jsdom = require("jsdom"); // to select the element from html of web app 
const { JSDOM } = jsdom;

const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-10th-match-1254067/full-scorecard";
request(link,cb);

function cb(error,response,html)
{
   if(error){
       console.log(error);
   }
   else{
       //console.log(html); //print html of given link
       const dom=new JSDOM(html);
       const document=dom.window.document;
       let mostWicket=0;
       let nameOfmostWicket="";
       let bowlerTable=document.querySelectorAll(".table.bowler");
       //console.log(bowlerTable.length);
       for(let i=0;i<bowlerTable.length;i++)
       {
           let rows=bowlerTable[i].querySelectorAll("tbody tr");
           //console.log(rows.length);
           for(let j=0;j<rows.length;j++){
            let tds=rows[j].querySelectorAll('td');  
            if(tds.length>1){
                let name=tds[0].textContent;
                let wicket=tds[4].textContent;
               
                //console.log("Name of Bowler ---> ",name,"     Wickets ---> ",wicket);
                
                  
                     if(wicket>mostWicket)
                     {
                         mostWicket=wicket;
                         nameOfmostWicket=name;
                     }
                 
                 console.log("Name of Hightest Taker :",nameOfmostWicket);
                 console.log("number of wicket taken :",mostWicket);
                
            }
            console.log("Highest wicket taker"+max);

           }
       }
    }
}

//1. access all bowler name and wicket
//2. from that data we will find max wicket taker