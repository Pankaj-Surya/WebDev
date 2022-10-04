import React, { useState, useEffect } from "react";
import { auth, database,storage } from "../firebase";
import { signUpMiddleWare } from "../redux/authMiddleware";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from "react-redux-firebase";

import TextField from '@mui/material/TextField';
import insta from '../assets/insta.jpg'
import Button from '@mui/material/Button';

function Signup(props) {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [filePath, setFilePath] = useState("")

  
  
  async function signupHandler() {
    // alert(email + " " + password + " " + name)
    try {

      if(email=="" || password=="" || name=="" || filePath==""){
        alert("All Fields are requiered")
        return
      }
       
      let obj = {
        email,password,name,filePath
      }

      props.signupWithFirebase(obj)

      
    } catch (err) {
      alert(err.message);
    }
  }

  // 3. Get sign in user data from database -> firestore 
  // useEffect(function () {
  //   // get
  //   async function fn() {
  //     const docSnap = await database.users.doc("cQs3NYCarKcDWLWxOZK8PafFNEu2").get();
  //     let user = docSnap.data();
  //     console.log(user);
  //   }
  //   fn();
  // }, [])

  return (
    <>
    {
       isLoaded(props.firebase.auth) && props.firebase.auth?.uid != undefined ? <Redirect to="/"></Redirect> :
       <>
       <div>Signup Page </div>
       <div className="signup-container">
          <div className="signup-card">
           <img src={insta} alt="" />
          <TextField id="outlined-basic" fullWidth margin="dense" label="Email" variant="outlined" />
          <TextField id="outlined-basic" fullWidth margin="dense" label="Password" variant="outlined" />
          <TextField id="outlined-basic" fullWidth margin="dense" label="Full Name" variant="outlined" />
          <Button variant="outlined" fullWidth component="label"  style={{marginTop:'0.5rem'}}>
            Upload
            <input hidden accept="image/*" multiple type="file" />
         </Button>
         <Button variant="contained" fullWidth component="span" style={{marginTop:'0.5rem'}}>
            Sign Up
         </Button>
          </div>
          <div className="bottom-card">
            Already Have an Account ? <span style={{color:'blue'}}>Login</span> 
          </div>
       </div>
       
       
       
       
       
       
       <br />


       
       <input
         type="email"
         placeholder="Enter Email"
         value={email}
         onChange={(e) => {
           setEmail(e.target.value);
         }}
       ></input>
       <br></br>
       <input
         type="password"
         placeholder="Enter Password"
         value={password}
         onChange={(e) => {
           setPassword(e.target.value);
         }}
       ></input>
       <br></br>
       <input
         type="text"
         placeholder="Full Name"
         value={name}
         onChange={(e) => {
           setName(e.target.value);
         }}
       />
       <br></br>
        {/* uncontrolled input -> input type file   */}
       <input type="File" onChange={(e) => {
         setFilePath(e.target.files[0]);
         // console.log(e.target.files)f
       }}></input>
       <br></br>
       <button onClick={signupHandler}>Signup</button>
     </> 
    }
    </>
        
  );
}

function mapStateToProps(store){
  console.log("store from signup",store)
  return{ 
    auth : store.auth,
    firebase : store.firebase
  }
}

function mapDispatchToProps(dispatch){
  return{
    signupWithFirebase: function (userDataOBj) {
      dispatch(signUpMiddleWare(userDataOBj))
  }
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Signup)







