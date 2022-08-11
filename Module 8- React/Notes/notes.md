=============================================
     REACT :         Day : 22-07-2022
==============================================

Html and css , javascript

Advantages:
1.code structure/Management


GPU ---> graphic / view change

UI change --
            |
normal alogrithm ----> o(n^3)

           react -------> o(n)


Application : large project with lots of UI changes 
To use react you need to know how actually 

Library   VS  Framework
           |
tool       |          i
               

Framework  :   structure -->in which we have to write code   

Library    :   tool --> no structure


<!-- react ui change algorithm -->
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<!-- using react library it changes actual web page -->
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
<!-- babel library converts your jsx into js  -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>


 babel -> it knowa that we need to convert JSX to simple js 
 <script type="text/babel">


     function Hello() {
            return (
                <h1>hello world</h1>
            )
        }

 // it puts hello component ka output in the app div
        ReactDOM.render(<Hello></Hello>, document.getElementById("app"));



=============================================
     REACT :         Day : 25-07-2022
==============================================

Pops Vs State
1.passing parameter in function---> pass attr in component--> prop       & 
2.making variable in function -->state



props  --->the parameter passed from parent in the form  of html attr
parent to child data

state 
       usestate(0) --> initial  value store karta hai. 
       [var,function] -function --> val change karta hai

TODO App
============
        
       

         when state variable change(detetction of changes) then i will change UI for that componenet


         primitive : directly compare the value 
         non-primitive : Array,Object -->refernce comparision  

         setTask("hello"--->)
         const taskArr =[];
         taskArr.push("Hello")
         setTask(taskArr)

Spreader : To copy the one to array to other array

Destructring :



=============================================
     REACT :         Day : 29-07-2022      
==============================================

Props :Passed data from parent comp to child comp

map  ---> 


❤ Component Divide

Lifting the stateup

##Sending Data### :

 1. From parent data to child      ---> props in child(props)
 2. From Children to parent        ---> inside props pass function
                                        then go to children call that function
                                        1.sends the function which needs data as a props
                                        2.create a  new function in child component
                                        3.call the parent function inside that function and pass the data as props

                               function InputBox(){         
                                        function addTaskFromInput(){
                                            props.addTask(value);
                                            changeValue("")
                                        }
                                    }

                                   <button onClick={addTaskFromInput}>

=============================================
     REACT :         Day : 31-07-2022      
==============================================

1.create-react-app   
setup : react
        structring 
        autoreloading
        react dev tool
Npm i yarn -g 

yarn create react-app movies

Add chorme extension--> react dev tool
Add vscode extension--> ES7 react redux tool

2.How to import a react file?
what to import -->

import what from "./filekapath"

To use node modules --> import "./"

3.How to export ?
export default App;


                                        Index
                                          |
                                         App
                                          |
                    ---------------------------------------------- 
    |               |                      |                     |
                    default              default               default
                    comp-1               comp-2                comp-3


4.where is root ?
public--> index.html
<div id="root"></div>

Project Link
https://react-bootcamp-movieapp.netlify.app/

=============================================
     REACT :         Day : 01-08-2022      
==============================================

########### Movies Application ################ 

Feature
1.Trending movies : they are sourced from TMDB API 
2.Data Available 
    2.1 Movies Img Src
    2.2 Movies Name
    2.3 Genere --> Type of movies
    2.4 Rating 
    2.5 Popular 
3.Pages : Two Pages
          1.MainPage : List of Movies
                       # Banner --> first movies   ka   banner
                       # List of Trending movies 
                       # Pagination
          
          2.Faviourates : 
              Header
              Genre List
              searchbar,np. of items modifier

## Technical prequisites
Q.How to make a request in react and render that data on UI(Ajax) 
  React--> Life Cycle Methods
  Faviourates Page :Features that are highly used : * Pagination,
  * Group by
  * Sorting
  * Searching
  * Routing



Practice : communication between multiple component
           sending data from one page to another

Day 1 : Static UI,Data recieve 
Day 2 :
Day 3 :



<h1 className="h1style" key={curElm.id}>Name:
                                    {curElm.myName} & Age: {curElm.age}
                                    <button className="btnInner" onClick={() => removeElem(curElm.id)}> remove </button>
                                </h1>

=============================================
     REACT :         Day : 03-08-2022      
==============================================
React.useeffect ---> 
It is hook that excutes a fn passed into it  runs after first render 

searching done


=============================================
     REACT :         Day : 05-08-2022      
==============================================
Searching 

pagination

Routing 

npm i react-router-dom@5.3.0


Icons

npm install flat-color-icons


vade --->

=============================================
     REACT :         Day : 05-08-2022      
==============================================
Passing Favourites data from Home to Favourites Page  
Sorting 
filtering



###Passing Favourites data from Home to Favourites Page### 
1.movies[ ] and favs[] 
  movie.id==fav.id 
         show cancel symobol
         else  show like symbol 
check movie is Liked or Not Liked
we will add favourites movies in fav array
& when unlike remove from fav array
2.if that movie id presendt in fav array then that is liked movie

3.created icon(like and cancel) in each movie using bootstarp link in index.jsx
4.three function 1.show 2.action 3.reaction
  4.1 checkIfFav( ) --> check like or not 
  4.2 addToFavorites()  --> add fav movie to fav array
  4.3 deleteFromFav()  

.we craeted usestate for favourites 

==========
Favorites Page

Q.1
1. All Genre , Action , Rommance option we have 
2. If we click on All Genre the that only make  blue all others like Action and Rommance make Grey
Ans:
let [currGenre , setCurrGenre ]= React.useState("All Genre ");

Q2
Styling of Favourites Done

Q3 
Local storage
