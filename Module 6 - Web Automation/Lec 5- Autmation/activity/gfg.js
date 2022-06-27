// browser control
// controls a headless browser -> browser that is by default not visible 
// npm i puppeteer
const puppeteer = require("puppeteer");

// nearly every function of puppeteer returns a promise
async function fn() {
    const browserRepresentativeObj = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        defaultViewport: null,
        args: ["--start-maximized", "--start-in-incognito"],
        slowMo: 100
    });
    //new  tab open  
    const tab = await browserRepresentativeObj.newPage();
    // // to go google's home page 
    await tab.goto("https://practice.geeksforgeeks.org/explore?page=1&company[]=Amazon&sortBy=submissions");
      // // // page change error prevent  -> to wait for selector that is present on the second page  
      await tab.waitForSelector(".ui.checkbox", { visible: true });
      // // click 
      myTimeout = setTimeout(browserMeChalneWalafn, 5000);
      let amazonName = await tab.evaluate(browserMeChalneWalafn); //call browserMeChalneWalafn()
      console.log(amazonName);
      // represent -> in good format 
      
      function browserMeChalneWalafn() {
        // let companyArr = document.querySelectorAll(".ui.checked");
        // let amazon = companyArr.length
        // return amazon;
      
        let elemArr = document.querySelectorAll(".explore_problemContainerTxt__kyh8P");
        //let count =elemArr.length;
        return elemArr[0];

      }
      console.log("End");
     
      // 2. // no meaning 
      // document represent the whole html page 
 
      //await tab.click(".ui.checked", { delay: 200 });
 
}

fn();
console.log("End 1");