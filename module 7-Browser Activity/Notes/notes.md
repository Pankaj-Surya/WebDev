 
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


------------------






if there are multiple files in an html file then -> all the codes are combined and it ios treated as one




Flex-wrap -> if all the elements width is more then the given width of the parent then wrap will put the extra elements in the next line

line-heigth: vertical distance between two line

Task : when + is click new ticket window will created
     
Task : change color header featur 



01-07-2022 : JIRA Clone Project- Web browser activity
-------------------------------------------------------------------------------------------------

Task
1.Filtering, locking
2.delettaion
3.color change
4.creation



How to toggled?


Filter                    vs    Delete
---------------------------------------------------
hide the element           |     Delete the element
                           
option 1:
visibility : hidden
occupy its space remain hidden
option 2:
display : none
not occupy its space remain hidden


@filterTickets
 
 
 1.color click --> change color



@Creation

**********Position -Style*********

Position : Relative
          position of elememt relative to its original position
          and does not allow to enter inside anoter element
          it also occupy its original position
Position : absolute
           position an element w.r.t pages's top left corner
           it leaves its original positin
Position : fixed
           stick to its position
 




04-07-2022 : JIRA Clone Project- Web browser activity
-------------------------------------------------------------------------------------------------

when we lock--->add,delete ,edit,filter

Ticket ---> 
            1.Filter  ---->lock

            2.create  | 
            3.edit    | --->lock,unlock
            4.delte   |


*enableEdit()
*disableEdit()

Main\App Level-->changes on whole app
----------------
1.Filter
2.lock
3.unlock
4.enable delete

1.lock
      1.1 islockedd = true
      1.2 editing = disable
     
2.unlock
       2.1 islockedd = false
        2.1.1 C E D chane color 
       2.2 editing = enable
        2.3 show all = filter--> every ticket should be

3.enable delete
       3.1 depn upon -->islockd
       3.2 toggle-->isdelete ->delete ticket

4.filter
        4.1 depn --> islock=true
        4.2



Ticket
-------------
1.create        |
2.color change  |
3.edit          |=====>unlock first
4.delete        |

1.create 
       first islock=false
       then create ticket

After creating
                             
2.colorchange -->
     header -->color change 
     ticket -->delete

--------------
left : calc(100vw-30rem)/2


Deployement
--------------
1.html file ---> index.html(outside file)
2.push the code to github
    git init
    git add .
    git commit -m 
    git 
3.go to setting-->pages-->src enable main
4.to check go to action


App
----------------
islock  ----> true/false

isdelete  ----> true/false





========================================================================================================================
   08/07/2022                                         Browser --> project-2 : Excel Clone
========================================================================================================================

CONSTRAINT : 1.GRID    :-   A-Z =>Horizontally
                         1-100 => vertically

             2.formula :- Set => formula bar

          
             3.Styling :- First fromula
                          Font 
                          Bold Italic Unde;ine
                          Alignment



Feature :
          1.menubar
          2.formulabar
          3.grid       
          4.sheet     
          
         1.Styling text 
         2.multiple sheet
         3.2-way binding 
         4.formula
