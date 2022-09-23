import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from 'react-redux-firebase';
function Home(props) {
  return (
      <>
      {
        isLoaded(props.firebase.auth) && props.firebase.auth?.uid == undefined ? <Redirect to="/login"></Redirect> :
        <h1>Home Page</h1>


    }
      </>
  )
}

function mapStateToProps(store){
    return {
       auth : store.auth,
       firebase : store.firebase
    }
}

export default connect(mapStateToProps)(Home)