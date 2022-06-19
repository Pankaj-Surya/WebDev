
   Web Automation
=================================================

17 july :  web automation on pepcoding.com   
-----------------------------------------------------

Application web automation
1.Dynamic content Scrap
2.Secured Content
3.Automation Testing --

understanding Asymc Await

Q1.why we need Async await
   To avoid call back hell in callback 

*Promise --> 1.State --->1.Fulfill - Success
                        2.Rejected -Error
            2.Value ---> undefined Success -data
                      
asynchrous function --> return a promise

Q. what is async  function ??
 
await :
      await is only valid in async function 

      it stops the myfn function till promise is fullfilled and return value of that promise


      


puppeteer --> 
1.chromium browser --> open browser
2.control web browser
3.nearly all function of pptr are async
4.
https://flaviocopes.com/puppeteer/

npm i puppeteer

action --> keyboard , mouse , scroll

18 july 2022 :  web automation on    
-----------------------------------------------------

Last class revised:
async --> it is keyword & in async function call we have to pass callback but we can use promise to avoid callback helling
promise has state (pending, fulfill, rejected ) & vale (undefined intially )

await --> keyword wait till state (rejected,fulfill)

1.headless: false : to backend browser in frontend
2.executablePath : to run instead chromium into chrome  
3.defaultViewport: maximize the browser  
4.slowMo: slow the browser
3.type
4.tab.keyboard.press("Enter"); //specific key
5.waitForSelector(".LC20lb.MBeuO.DKV0Md", { visible: true })
page change error prevent --> to wait for selector that is present in next page await tab.

peter.sh --> for all argument