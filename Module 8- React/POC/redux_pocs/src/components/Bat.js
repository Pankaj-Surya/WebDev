import React from 'react'
import { connect } from 'react-redux'
function Bat(props) {
  console.log(props)
  
  const buybatss = props.buybatt
  const sellbatss = props.sellbatt  
  return (
    <>
      <h1>Bat -{props.bat}</h1>
      <button onClick={()=>{ buybatss()}} >buyBat</button>
        <button onClick={()=>{sellbatss()}}>sellBat</button>
    </>
  
  )
}

function mapStateToProps(state){
    console.log("mapStateToProps method")
    return {
        bat : state.bat
    }
}

function mapDispatchToProps(dispatch){
    console.log("mapDispatchToProps method")
    return{
      buybatt : () => {dispatch({type :"buyBat"})},
      sellbatt : () =>{dispatch({type :"sellBat"})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat)