 
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


🟢🟢addEventListner(event,fn)


💥😻💀
🙈🙈🙈🎃
🎈⚽⚾🥎🏀📕📔
📖
📗📘🌕🌕
☂

Local Storage




Task:


Q. how to perfecty center div inside another div 
justify-content:cnter 
align-item : center

Event : e is object 


01-07-2022 : JIRA Clone Project- Web browser activity
-------------------------------------------------------------------------------------------------
ticket --> header -->
color --> oscillating
id --> unique --> library
text ---> editable or not one same condtion(lock or unlock)
filtering 
delete

create , local storage

to code anything dynamic --> satic version -->


🔴        
🔵

🟣
🟤

css properties
--------------
in flex not set--> height, width --> min-height , min-width


🟢flex -> height , width : min-height , min-width

1.height , width : it is like constant even       increase in content they will not change the size 
Problem : so content overflow occurs to avoid this we use min-height , min-width property

2.min-height , min-width : minimum height should be this if content increases then increase height , width according

3.min-height, max-height : let we used both togther it is like we are giving height range --> 200px to 500px but content size more then above 500 px again content overflow 
To avoid this we can use ---> overflow:scroll property


💛🧡🧡🧡FLexBox💛💛💛💛💛💛💛💛💛💛

flex has 
1. main axis (horizontal)--> x axis --> By default
2. cross axis (vertical)---> y axis

display : flex ---> all child become horizontal 


properties of flexbox
1.justify-content : horizontal --> x axis movement
(for default ) --> flex-end , flex-start , center,space-between, space-evenly,space-around
2.align-item : vertical --> y axis movement 
(for default ) --> center, flex-end, flex-start,stretch,baseline
3.flex-direction : coloumn (main axis--> y axis) by default row (main axis--> x axis) --> row-reverse , cloumn-reverse
5.align-self : for individual item








if there are multiple files in an html file then -> all the codes are combined and it ios treated as one




Flex-wrap -> if all the elements width is more then the given width of the parent then wrap will put the extra elements in the next line

line-heigth: vertical distance between two line

Task : when + is click new ticket window will created
     
Task : change color header featur 