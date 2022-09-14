import { bindActionCreators } from "redux"

const intialState ={
    ballCount : 10
}

function BallReducer(state=intialState,action){
    
    switch(action.type){
        case "buyBall" : return {
          ballCount:state.ballCount+1 
        }
        case "addBall" : return {
            ballCount:state.ballCount+ action.payload
        }
        default :  return state
    }
    
   

}
export default BallReducer