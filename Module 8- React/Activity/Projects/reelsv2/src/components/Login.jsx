import React, { useState } from "react";
import {connect} from "react-redux"
import {signInMiddleware,signOutMiddleware} from "../redux/authMiddleware"
import { Redirect } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';

function Login(props) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function loginHandler() {
        // alert(email + " " + password);
        // firebase talk -> login
        // try {
        //     let userCreds = await 
        //     auth.signInWithEmailAndPassword(email, password);
        //     console.log(userCreds.user);
        //     alert("user Logged In");    
        // } catch (err) {
        //     alert(err.message);
        // }

        props.loginWithFirebase(email,password)
        setEmail("");
        setPassword("");
    }
  
  return (

    <>
    {isLoaded(props.firebase.auth) && props.firebase.auth?.uid != undefined  ? <Redirect to="/"></Redirect>:
        <>
        <h1>Login</h1>
        <input type="text" placeholder="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
        ></input>
        <br></br>
        <input type="password" placeholder="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
        ></input>
        <button
            onClick={loginHandler}
        >Login</button>
    </>
    
    }
    </>
   
  )
}

function mapStateToProps(store){
  console.log("store",store)
   return {
      auth : store.auth,
      firebase :store.firebase
   }
}

function mapDispatchToProps(dispatch){
   return {
     loginWithFirebase : (email,password) =>{
          dispatch(signInMiddleware(email,password))
     },
     logout : ()=>{
        dispatch(signOutMiddleware())
     }
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)