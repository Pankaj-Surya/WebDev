import React from 'react'
 
const intialState ={
    bat : 10
}

function BatReducer(state=intialState,action) {
//   return (
//     state
//   )
   switch(action.type){
    case "buyBat" : return {
           bat:state.bat+1
    }
    case "sellBat" : return {
          bat:state.bat-1
    } 
    default : return state
   }

}

export default BatReducer