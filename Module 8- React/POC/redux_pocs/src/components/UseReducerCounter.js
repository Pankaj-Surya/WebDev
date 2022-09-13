import React from 'react'



function reducer(state,action){
 switch(action.type){
    case "increment":
        return{
            value : state.value+1,
            color: state.color
        } 
    case "decrement":
        return{
          
           value : state.value <= 0 ? 0 :state.value-1 ,
           color: state.color 
        }
    case "setValue" :
        return{
            value : action.payload,
            color: state.color
            
        }
    case "setColor" :
        return{
            color : action.payload,
            value : state.value
        }
    default : return state;
 }
}

const intialState={
value:0,
color:"lightblue"

}


function UseReducerCounter() {
    const[stateObj,dispatch]=React.useReducer(reducer,intialState)
    const [inpVal,setInpVal]=React.useState("");
    const [inpColor,setInpColor]=React.useState("")
    
    return (
    <>
    <br />
    <hr />
    <h1>UseReducerCounter</h1>
    
    <h2 style={{color : stateObj.color}}>{stateObj.value}</h2>
    <button onClick={()=>{console.log("click inc")
        dispatch({type:"increment"})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
    
    <br />


    <input type="text" value={inpVal} onChange={(e)=>{setInpVal(e.target.value)}}/>
    <button onClick={()=>{ dispatch({type : "setValue" , payload : inpVal})
        }}>SetVal</button>

    <input type="text" value={inpColor} onChange={(e)=>{setInpColor(e.target.value)}} />
    <button onClick={()=>{dispatch({type:"setColor",payload :inpColor})}}>SetColor</button>
    </>
  )
}

export default UseReducerCounter