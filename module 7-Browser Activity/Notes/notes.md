 
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




1.Height Set for container

2.added number 1-100 and A-Z cell using js
  2.1 select conatiner
  2.2 create cell --> loop cell  
  2.3 for A-z --> used ASCII value String.fromChar (65  +i)

3.overflow problem --> .grid_container => overflow : hidden, visible , scroll(both side scrollbar) , auto(only on neccessary) we can use scroll or auto

4.made empty cell using js
  //grid
   .row{
    display : flex;
   }


  // 1. row
  for(i : 1-->100){
      1. row ka div create 
      2. set attribute class - row   
     //2. col
    for(j : 1-->26){
      1. colm ka div create
      2. set attribute class -cell
      3. col.textContet = A-1
      4.row.append(cell)
    }
    grid.append(row)
  } 

5.Postioning relative parent and absolute child
  
  //Parent
   .grid_container{
      position : relative
   }

   //childs
  .top_row{
    position : absolute
    top:-1.5rem
    left:2rem
  }
  .left_col{
     position : absolute

  }

  .top_row{
    position : absolute
  }

  .grid{
    position : absolute
  }
  
  .tl_cell{
    position : absolute
  }

  position : if we give prop to parent then child alse set with same
  if we set parent as relative then (0,0) set then 
  we make child absolute to start from (0,0) of child

  .grid_container->set parent ---> Relative 
  .left_col,.top_row,.grid  ---> Absolute--> parent ka (0,0)


   1.doc.createElement("div")
    .cell.setAttribute("class","cell")
    .
    .

6.Sheet Styling 
  
  html 
  1. div --> class=add_sheet
  2. div --> class=sheet , myId=1

  .sheet_container{

   display : flex;
  }
  .add_sheet{
   display : flex;
   align-item:center
   justify-content:center
  }
  .sheet{

  }

  
========================================================================================================================
   10/07/2022                                         Browser --> project-2 : Excel Clone (Day -2)
========================================================================================================================
 


 1. Height of Grid(using calc)
 2. creating cell using js
    2.1--> left col 1-100
    2.2--> top row A-Z
    2.3--> Grid -> 2D --> div row in cell
 3. positioning grid --> relative parent and absolute child , overflow out of window
 4. 


 100 vh --> Browser Window Height
 100 vw --> Browser window width

 80%    --> Relative to your parent



Features Today
  1.Addressbar 
  2.Menu Bar
  3.2 way Binding


1.Styling Formula_Contianer


    div                  |      input
  1.  block
  2. editable


2.In grid when we click on any cell its address reflct in address bar
 2.1 in grid : we set these 2 attr to identify each cell
               without showinng any change on ui
             -> col.setAttribute("rid",i)
             -> col.setAttribute("rid",j)
 2.2 address bar implementation
              1. cell evennlistener -> on click
               for(i : 0--> cell.length){
                cells[i].addEventlistner("click",function(e)
                 let cCell =e.cuurentTarget ;
                 cCell.getAttribute(rid)
                   cCell.getAttribute(cid)
               })

               Problem : we are selectiong elemet before creating cell
               so we make functin init put rest code
               then call init 
               then select cell

              2. when cell is clicked -> element
              3.get rid,cid --> convert to addr bar
              
              4.put into addr bar    


3. MenuBar Implementation
               3.1 Design & Styling MenuBar
                  1.div > class="select_f_family"
                    select > for dropdowm
                  2.

                  .menu_bar{
                    display : flex
                  }

                  .menu_bar>*{
                    heiht:80%
                  }

                  .s
               
               3.2 font size implemetation
               fntsel=document.querySelectot(".select_f_size");
               fntselect.addEventListner("change",function(e){

                //1.set->add get fro add bar
                getcidridFromAddBar()
                //2. address -> ui cell get(html)
                //3. styling set

               }              )
               

               function getcidridFromAddBar(){
                   addtoridcid(adddress)
               }

               function addtoridcid(adddress){
                 //D2 -> rid=2 ,cid=3
                
               }
               3.3
               
               3.4


  
========================================================================================================================
   11/07/2022                                         Browser --> project-2 : Excel Clone (Day -3)
========================================================================================================================

Feature : Today
1.Menu : 
2.Formula :


1.

 toggle ----> on to off / off to on


 make a text bold in css dom --->(fontWight) 1. bold 2. normal
 make a text italic in css dom ---> (fontStyle)1. italic 2. normal
make a text underlined in css dom --->(textDecoration) 1. underline 2. normal

boldBtn.evenListner("click",function(){
   //1. get the change 
    let isSelected = boldButton.classList[2];
    //2. where to change
    let cellToBeChanged = getCell();
    //3. do the change 
    if (isSelected == "selected") {
        boldButton.classList.remove("selected");
        cellToBeChanged.style.fontWeight = "normal";
    } else {
        boldButton.classList.add("selected");
        cellToBeChanged.style.fontWeight = "bold";
    }
}) 

function getCell(){
  //1. set ->addr get from addr bar
  //2. add -> ui cell get
  //3. style set
  return
}


similar for italic and underline


2.
now we want to stored the each cell data to store which property applied on that like font-family, bold ,italic 

  1. we wil make 2D matrix 
  2. implement 2-way binding --> store data about evry cell in 2d matrix --> every cell has properties
  3. keep that 2 d array in  .... --> ...
  4. when u click on any cell --> reflelected changes  in  menu UI


  

  let db =[];
  function initDb(){
    for(i: 0-->100){
      let rowArr =[];
      for(j: 0-->26){
       let cellObj ={
        fontfamily:"Courier New"
        fontSize:"16"
        isBold:false
        isItalic:false
        isUnderlined:false
       }
      rowArr.push(cellObj); 
      }
     
    }
  }



## How to debug in browser ?

========================================================================================================================
   13/07/2022                                         Browser --> project-2 : Excel Clone (Day -4)
========================================================================================================================



//
To store the database of previous cell

##Alignment###

1. select All alignmentbtn using querSelectorAll
2. loop for(i: 0--> alignmentBtns.length()){
       alignmentBtns[i].addEventListner("click",function(){
         //1.reomve selected class ffrom every ele
          for(j: 0-->alignmentBtns.length()){
           alignmentBtns[j].classList.remove("") 
          }
       })
}  
.........



####FormulaBar####

@@ Events 
 1. keyboard Input
        1.1 enter
 2. form 
        2.1 focus
        2.2 blur


💥Constraint💥
1. A-Z   ---> colms
2. 1-100 ---> rows

3. Formula Set ---> formula bar
4. Value Set   ---> cell 

formulaBar --> (A1 + A2)

1. init.js  
        cellObj   
              formuala=""
              value =""

2. 
  Case 1 : when u click enter in formula bar
           1.formula string
             1.1 (A1+A2) ---> get the A1 and A2
             1.2  Replace with value--> (20+30)
             1.3  Evaluate -->50
             1.4  address bar --> get cell address (B1)
             1.5  UI cell ---> put 50
             1.6  DB      ---> value =50
                               formula=(A1+A2)

            when u cell --> blur --> set value in DB



3. created formula.js
    //set value
     for(i:0-->cells.length()){
       cells[i].addEventListner("blur",function(){
        //db set value
        let{rid,cid}=getRidCidFromUI(cells[i])
        db[][].value =cells[i].value
       })

     }
    //set formula
     formualaBar  --->queryslector
     formulaBar.addEventListner("keypress",function(e){
       if(e.key ="Enter" && formula.value != ""){
        //formula implementaion
        let formula =formulaBar.value;
        let ans =evaluate(formula)
        let {rid,cid}=getRidCidFromAddressBar();
        setUI(ans,rid,cid)
        setFormulaToDb(formula,rid,cid,ans);

       }
     })


function getRidCidFromUI(uicell){
  let rid = uicell.getAttribute("rid");
  let cid = uicell.getattribute("cid");
  
}

function evaluate(formula){
  //parse--->(A1+A2) get cell from formulaBar
  //(A1+A2)->split --.array -->[(,A1,+,A2,)]
  let formulaEnttites =formula.split("");
   for(i:0-->formulaEnttites.legth){
    let cEntity = formulaEnttites[i]
    let ascii = cEntity.charCodeAt(0)
   
    if(ascii >=65 && ascii<=90){
     
    }
   }

  //(20+30)-->ans
}


========Helper============
function getRidCidFromXSTringAddress(){

}


========================================================================================================================
   17/07/2022                                         Browser --> project-2 : Excel Clone (Day -5)
========================================================================================================================

CASE 2 :

cell -->value change 
        if the cell part of a formula
          |
          1.evaluate the CELL again
          2.set UI

 when you change the value 
 you tell your children to evaluate       

let say children1 is also depened on another children

1. tell parent to set you as children
2.  
function setFormulaInDb(formula,rid,cid,ans){

  ......
 parent mey apna children set karlo 
 (A1+A2) --> [0,0] [1,0] 

}


1.children check --->parent
2.evaluate cell
3.evaluate cRecursively


function evaluateChildre(children){
  if(children.length == 0){

  }
  for(i:0-->children.length()){
    let currCHildren =children[i];
    let {rid,cid} = getRidCidFromStringAddress(currCHildren)
  
  }
}


evaluate      --> formula pass --> get val
setUI/setCell --> UI set / DB Update


CASE 3 :
        if cell has having formula
        then we remove formula from cell
         
        it should be independent


        update ---> formula bar
        delete ---> cell
        

        1. UI --> val
 
                  children

formula.js
             set val
             if(dbcell.formula != ''){
              removeFormula();
             }



Steps :- 1. formula remove
            |
            -->2. paret set child remove
          3.      as well formula remove

              


Case 4 : 

       extract formulabar --> set formulabar

       A1


Improvemet  ---> 1. parsing 
                 2. formula validation
                 3. colm and rows --> generic
                    we have 100 row and A-Z cell only


Graph (cycle Detection)
                 A1  --> formula : 2  * A3
                         value   :  10
                 A2  --> formula : 2  * A1
                         value   :  20
                 A3  --> formula :  2  * A2
                         value   :  30       


                          

Sheet   : sheet add ---> myId = 0 add 1
                         myId+1

let sheetAddbtn =document.querySelector(".add_sheet");
let sheetSubConatainer =document.querySelector(".add_sheet");

addBtn.addEventListner("click", function(){
  
  sheetSubConatainer.appendChild();  
  ....

  //
  sheetHtml.addEventListner("click", function()

})

function changeSheet(e){
 let sheetHtml=e.currenttarget;
 let s
}


Sheet :  [1,2,3,4]
        [10,20,30,40]
            [40,50,60,70]

init.js

sheets[];
let db=sheets[0];

sheets.push(db);








