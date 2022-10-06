import React, { useState, useEffect } from "react";
import { auth, database,storage } from "../firebase";
import { signUpMiddleWare } from "../redux/authMiddleware";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from "react-redux-firebase";
import { Link } from "react-router-dom";

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
       <div className="signup-container">
          <div className="signup-card">
           <img src={insta} alt="" />
          <TextField id="outlined-basic" fullWidth margin="dense" label="Email" variant="outlined" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}/>
          <TextField id="outlined-basic" fullWidth margin="dense" label="Password" variant="outlined"
               value={password}
               onChange={(e) => {
                 setPassword(e.target.value);
               }} />
          <TextField id="outlined-basic" fullWidth margin="dense" label="Full Name" variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }} />
          <Button variant="outlined" fullWidth component="label"  style={{marginTop:'0.5rem'}}>
            Upload
            <input hidden accept="image/*" multiple type="file" 
             onChange={(e) => {
              setFilePath(e.target.files[0]);
              // console.log(e.target.files)f
            }}/>
         </Button>
         <Button variant="contained" fullWidth component="span" style={{marginTop:'0.5rem'}}
         onClick={signupHandler}>
            Sign Up
         </Button>
          </div>
          <div className="bottom-card">
            Already Have an Account ? <Link  to="/login" style={{textDecoration:'none'}}><span style={{ color: 'blue' }}>Log in</span></Link>
          </div>
       </div>
       

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







