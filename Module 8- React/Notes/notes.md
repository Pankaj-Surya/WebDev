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

1.setting data--> imdb = collectionName
 localStorage.setItem("imdb",JSON.stringify(newArr))
        
2.getting data after first load of page so we add that into useeffect
 let oldFav =localStorage.getItem("imdb"); 
            oldFav=JSON.parse(oldFav);
            setFavourites([...oldFav]); 


Q4 
How to show fav data in  table format

using Map function

Q5
How to show All Genre, Action, Music Button Dynamically and on click show only blue buuton on that Genre?

1.we have to take help of favourites Array data from that for each movie  GenreId Array will be there 
Ex. Minions: The Rise of Gru -> Genere [Family,Action,Thriller]
2.we will store for each movie will store one genreId
  in Genre Array --> const [curGenre , setCurrGenre] = React.useState("All Generes")
3. we will map over Genre Array 
4.on click on particular Genre SetGenre --> make that blue button
5.Problem --> To avoid duplicacy two time Animation Genre we will --> Set -->temp = new Set(temp); 


Q6
Delpoyement

1.npm run build --> ready for production
2.make account in netlify
3. go to sites option 
4. scrolldown drag and drop build folder


Problem
can't read poperties of null -->favs.map()
if Local Storage is not there loop over [] empty array
oldFav=JSON.parse(oldFav) || [];



Searching Sorting Filtering

Q7.Filter the movies List Base On Genre
Ex. click on Action show only Action Movie 
1.created array --> filteredMovies=[]

2.filteredMovies= currGenre == "All Genres" ?       Favourites : favorites.filter((movie) => genreids[movie.genres_id[0]]==currGenre)

3. Apply Map over filterArray instead favourites


Q8.Sortig based on Popularity and rating

const [rating, setRating] = React.useState(0);

  if (rating == 1) {
    filteredMovies = filteredMovies.sort(function (objA, objB) {
      return objA.vote_average - objB.vote_average
    })

  } else if (rating == -1) {
    filteredMovies = filteredMovies.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average
    })
  }

Q9 Searching 


1.const [search, setSearch] = useState("")
2.filteredMovies = filteredMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )
3. value={search} onChange={(e) => setSearch(e.target.value)}

Q10
Pagination

1. const [curPage, setCurPage] = useState(1)
2.  let maxPage = Math.ceil(filteredMovies.length / rows);
  let si = (curPage - 1) * rows
  let ei = Number(si) + Number(rows)

  filteredMovies = filteredMovies.slice(si, ei);

  let goBack = () => {
    if (curPage > 1) {
      setCurPage(curPage - 1)
    }
  }

  let goAhead = () => {
    if (curPage < maxPage) {
      setCurPage(curPage + 1)
    }
  }
3. pageProp={curPage} goBack={goBack} goAhead={goAhead}





=============================================
     REACT :  Insta Reel       Day : 2--08-2022     
==============================================
UseReducer--> react-pocs as show


const [state ,dispatch]=useReducer(reducer,intitalState)

1.reducer : It is fn takes two argument--> reducer(state,action){} --> always return state
            1.can be defined inside fn and outside fn also
            2.state argument --> current state
            3.action --> type --> type can be increment , decrement 
                btn1--> onclik= dispatch({type:"Increment"})
                btn2--> onclik= dispatch({type:"Decrement"})
            4.defined action.type in reducer method and give logic to that type
                if(action.type=="Increment"){
                   return state+1;
                }
                if(action.type=="Decrement"){
                   return state-1;
                }

  

=============================================
     REACT :  Insta Reel       Day : 23-08-2022     
==============================================
🥧
Redux -->
    Issues :1.lifting the   stateup    -> child to parent prop
            2.Prop Drilling ->
    prop passing in lower level drill  --> home --> nav --> islogin
UseCase : 
Code Flow :
Terminology :

Redux-->Create a global store


Code Flow : Change 

1.counter build --->
  UI  -->  +  0  -
state update -->change 

2.bat ---> 
state update --> change --> not known

3.User Data --> 
User ? loader : Data
state update 


1.npm i redux react-redux
2.create redux folder in src and store.js file in it
3.create reducer file pass intial state to it
3.In store.js
  Inbuilt function--> createStore()


1.Set the state
2.Update the state

Do we need to contact store or reducer

1.Set the state

Reducer :1. to provide the state
2.to update the state

Intial State --> Reducer -->Store--->App(Provider)--> connect (
  1.mapStatetoProp->store
  2.mapdispatchtoprop->dispatch)-->component (as prop)

2.Update the state
  dispatcher: componet to reducer talk using action (action.type==increment)

**jiska dispatch call hota hai woh render hota hai

**Always run the mapStatetoProp



=============================================
     REACT :  Insta Reel       Day : 25-08-2022     
==============================================

Recoil,flux alternative to redux

let say in case of  counter  

check whether reducer can do work or not?


Middleware : if i pass payload  or action 

if action   --> forword    --> 
if function --> data get  -->

when dispatch dosent have data call middleware. this will middleware get dta 

------------
Firebase : backend as service 
           1.login --> firebase auth
           2.DB access --> reel --> storage link
           3.file storage -->firebase storage 1.upload 
                   2.download 
                   3.to store multimedia file 


https://firebase.google.com/docs/auth/web/google-signin#web-version-8_1
