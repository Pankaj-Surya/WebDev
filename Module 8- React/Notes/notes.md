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




props  --->the parameter passed from parent in the form  of html attr
parent to child data

state 
       usestate(0) --> initial  value store karta hai. 
       [var,function] -function --> val change karta hai

