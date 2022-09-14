import React from 'react'
import {connect} from "react-redux"
function Ball(props) {
 //console.log("Ball Comp",props)
 const [qty,setQty] = React.useState(0);
 const ballCount = props.ballCountt
 const buyBall = props.buyBall
 const addBall = props.addBall 
 return (
      <>
      <h1>Ball -{ballCount}</h1>
      <button onClick={()=>{buyBall()}}>buyBall</button>
      <input type="number" value={qty} onChange={(e)=>{setQty(e.target.value)}} />
      <button onClick={()=>{
        addBall(qty)}}>AddBallQty</button>
      </>
  )
}

function mapStateToProps(state){
    return {
        ballCountt : state.Ball.ballCount 
    }
}

function mapDispatchToProps(dispatch){
    return {
        buyBall : () => {dispatch({type : "buyBall"})}
        ,addBall : (qty) => {dispatch({type : "addBall",payload :qty})}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Ball)