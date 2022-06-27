 
================================================================================================
                       WEB BROWSER ACTIVITY

=================================================================================================

26-jun : Web browser activity
-------------------------------------------------------------------------------------------------
🔵 Browser API has
1.document **
2.window  **
3.local storage
4.file
5.canvas 




FS ----> html content -create,read,update,delete done by documr

🔴document : document is represnation of whole html page that is provided by browser.


🟢DOM🟢
DOM : It is tree represenation of whole html page 
for each element property/style store in object 
a node has multiple properties link style

1.p tage create
2.content put
3.placed on a child of a body


Task: TODO LIST

Display task on UI
  1.listen to your button
  2.get the task from input
  3.add task to list



27-jun : JIRA Clone Project- Web browser activity
-------------------------------------------------------------------------------------------------

Browser has same call stack,Queue same as Node

🔴 document API --> Maniupulate the page

document has CRUD Operation




1.Get
  1.querySelector   
  2.querySelectorAll

  input tag --> .value
  rest of another tag--> .textContent
  to get Attribute-->.getAttribure()

2.Create
    1.create p tag--> .createElement("p")
    2.it will add last-->appendChild(newpEle)
    3.befor an ele -->insertBefore(pElem,ele)
    4.set Styling-->pElem.style.backgroundColor="lightgreen"


3.Update
    1.content 
    newpEle.textContent ="modified"
    
    2.styling
      pElem.style.backgroundColor = "lightblue";

    3.attribute
      anchorEle.setAttribute("href","")



4.Delete
     1.Delete element / tag
       ele.remove();

5.Copy 
      1.copy elemeny
        pElem.cloneNode()



Local Storage




🔴        
🔵
🟢
🟣
🟤