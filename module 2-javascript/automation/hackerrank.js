const puppeteer =require("puppeteer");

let browserPromise = puppeteer.launch({headless: false});  // browser open promise
let page;
browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    console.log("Page is opened");
    page = pageInstance;
    let urlPromise = page.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
   console.log("Hackerrank page is opened"); 
   let waitPromise=page.waitForSelector("#menu-item-2887 a");
   return waitPromise;
}).then(function(){
    let clickPromise = page.click("#menu-item-2887 a");
    return clickPromise;
}).then(function(){
    let waitPromise= page.waitForSelector(".fl-button");
    return waitPromise;
}).then(function(){
    // let loginclickPromise = page.evaluate(function(){
    //     let btns = document.querySelectorAll(".fl-button");
    //     btns[3].click();
    //     return;
    let loginclickPromise = page.evaluate(function(){
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btns[1].click();
        return;
    })
    return loginclickPromise;
})
