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
    await tab.goto("https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions");
      // // // page change error prevent  -> to wait for selector that is present on the second page  
      await tab.waitForSelector(".ui.checkbox", { visible: true });
      // // click 
     
     
      // 2. // no meaning 
      // document represent the whole html page 
      let document = dom.window.document;
      let companyArr = document.querySelectorAll(".ui.checked");
      let amazon = companyArr.length
      console.log(amazon);
      //await tab.click(".ui.checked", { delay: 200 });
 
}

fn();