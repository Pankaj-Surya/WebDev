import React from 'react'
import {connect} from "react-redux"
function Ball(props) {
 console.log("Ball Comp",props)
 const ballCount = props.ballpr
  return (
      <>
      <h1>Ball -{ballCount}</h1>
      </>
  )
}

function mapStateToProps(state){
    return {
        ballCount : state.ballCount 
    }
}


export default connect(mapStateToProps)(Ball)