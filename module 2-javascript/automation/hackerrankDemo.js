const { rejects } = require("assert");
const puppeteer = require("puppeteer");
const mail = "poyako8903@carsik.com";
const pass = "Table@888";
const code =require("./code")

let browserPromise = puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] }
);
let page;
browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    console.log("Page is opened");
    page = pageInstance
    let urlPromise = page.goto('https://www.hackerrank.com/');
    return urlPromise;
}).then(function(){
    return waitAndClick("ul.menu a");
})
// .then(function(){
//     console.log("Hackerrank page is opened");
//     let waitPromise = page.waitForSelector("ul.menu a");
//     return waitPromise;
// }).then(function(){
//     let clickPromse = page.click("ul.menu a");
//     return clickPromse;
// })
.then(function(){
    let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    return waitPromise;
}).then(function(){
    let domClickPromse = page.evaluate(function(){
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btns[1].click();
        return;
    });
    return domClickPromse;
}).then(function(){
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function(){
    let mailTypedPromise = page.type("#input-1",mail,{ delay: 100 });
    return mailTypedPromise;
}).then(function(){
    let passTypedPromise = page.type("#input-2",pass,{delay:100});
    return passTypedPromise;
}).then(function(){
    let clickPromse = page.click('button[data-analytics="LoginPassword"]');
    return clickPromse;
}).then(function(){
    return waitAndClick('[data-automation="algorithms"]');
})
// .then(function(){
//     console.log("Login successful hogya hai ")
//     let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
//     return waitPromise;
// }).then(function(){
//     let clickPromise = page.click('[data-automation="algorithms"]');
//     return clickPromise;
// })
.then(function(){
    return page.waitForSelector(".filter-group");
}).then(function(){
    let domSelectPromise = page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function(){
    console.log("warmup Selected");
    return page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
}).then(function(){
    let arrPrmosie = page.evaluate(function(){
        let arr = [];
        let aTags = document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        for(let i=0; i<aTags.length;i++){
            let link = aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    return arrPrmosie;
}).then(function(questionsArr){
    //console.log(questionArr);
    //let questionPromise = questionSolver(questionArr[0],code.answers[0])
    //console.log(questionsArr);
    console.log(code.answers.length);
    let questionPromise = questionSolver(questionsArr[0],code.answers[0]);
    for(let i=1;i<questionsArr.length;i++){
        questionPromise = questionPromise.then(function(){
            let nextQuestionPromise = questionSolver(questionsArr[i],code.answers[i]);
            return nextQuestionPromise;
       })
    }
    return questionPromise;
}).then(function(){
    console.log("All the warm up questions have been submitted!!!");
})

//use insted of jsDom ----> page.evaluate(function(){} works xcute on browsr only

//promisfy function
function waitAndClick(selector){
    return new Promise(function(resolve,reject){
          let  waitpromise = page.waitForSelector(selector);
          waitpromise.then(function(){
              let clickPromise = page.click(selector);
              return clickPromise;
          }).then(function(){
              resolve();// nxt .then() fxn contiue
          });
    })
}

// function questionSolver(link){
//     return new Promise(function(resolve, reject){
     
//     })
// }

function questionSolver(question,answer){
    return new Promise(function(resolve,reject){
        let linkPromise = page.goto(question);
        linkPromise.then(function(){
            return waitAndClick('.checkBoxWrapper input');
        }).then(function(){
            return waitAndClick('.ui-tooltip-wrapper textarea');
        }).then(function(){
            console.log("on the text area");
            let typePromise = page.type('.ui-tooltip-wrapper textarea',answer);
            return typePromise;
        }).then(function(){
            let holdControl = page.keyboard.down('Control');
            return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressX = page.keyboard.press('X');
            return pressX;
        }).then(function(){
            let upControl = page.keyboard.up('Control');
            return upControl;
        }).then(function(){
            return waitAndClick('.monaco-editor.no-user-select.vs');
        }).then(function(){
            let holdControl = page.keyboard.down('Control');
            return holdControl;  
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressV = page.keyboard.press('V');
            return pressV;
        }).then(function(){
            let upControl = page.keyboard.up('Control');
            return upControl;
        }).then(function(){
            return waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
        }).then(function(){
            console.log("questions submitted success");
        })
    })
}