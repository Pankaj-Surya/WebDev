import React, { useState } from "react";
import { connect } from "react-redux"
import { signInMiddleware, signOutMiddleware } from "../redux/authMiddleware"
import { Redirect } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';
import { Link } from "react-router-dom";
import * as firebase from 'firebase'

import TextField from '@mui/material/TextField';
import insta from '../assets/insta.jpg'
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';

import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'


function Forgot(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = React.useState('');
  
  async function forgotPaswordHandler(e) {
    
    e.preventDefault();

    try {
        // let userCreds = await 
        // auth.signInWithEmailAndPassword(email, password);
        // console.log(userCreds.user);
        if(email != ""){
            firebase.default.auth().sendPasswordResetEmail(email)
          setEmail("");
          alert("check reset password Link on Email");
        }else{
          alert("Email is Empty");
        console.log("Email is Empty")
        setError("Email is Empty")
        setTimeout(() => {
          setError('')
        }, 2000)
        }   

      } catch (err) {
        alert(err.message);
        console.log(err)
        setError(err.message)
        setTimeout(() => {
          setError('')
        }, 3000)
    } 

 }



  return (
   <>
   <div className="login-container">
            {/*1.Left Carosoul Img */}
            <div className="carbg">
              <div className='car'>
                <Carousel showIndicators={false}
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  interval={2000}
                  autoPlay={true}
                  showArrows={false}
                >
  
                  <img src={bg1} />
                  <img src={bg2} />
                  <img src={bg3} />
                </Carousel>
              </div>
            </div>
            {/*2.Right Login Container*/}
            <div>
              <div className="login-card">
                <img src={insta} alt="" />
                <TextField id="outlined-basic" fullWidth margin="dense" label="Email" variant="outlined"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }} />
                {
                  error != '' &&
                  <div style={{ color: 'red' }}>{error}</div>
                }
                <Button variant="contained" fullWidth component="span" style={{ marginTop: '1.5rem' }}
                  onClick={forgotPaswordHandler}>
                    Reset Password
                </Button>
                
              </div>
             
            </div>
  
          </div>
   
   </>
  )
}

function mapStateToProps(store) {
    console.log("store", store)
    return {
      auth: store.auth,
      firebase: store.firebase
    }
}

function mapDispatchToProps(dispatch) {
    return {
      loginWithFirebase: (email, password) => {
        dispatch(signInMiddleware(email, password))
      },
      logout: () => {
        dispatch(signOutMiddleware())
      }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps) (Forgot)