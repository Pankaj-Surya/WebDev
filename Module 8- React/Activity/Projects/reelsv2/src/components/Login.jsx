import React, { useState } from "react";
import { connect } from "react-redux"
import { signInMiddleware, signOutMiddleware } from "../redux/authMiddleware"
import { Redirect } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';
import { Link } from "react-router-dom";

import TextField from '@mui/material/TextField';
import insta from '../assets/insta.jpg'
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';

import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'

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

    props.loginWithFirebase(email, password)
    setEmail("");
    setPassword("");
  }

  return (

    <>
      {isLoaded(props.firebase.auth) && props.firebase.auth?.uid != undefined ? <Redirect to="/"></Redirect> :
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
                <TextField id="outlined-basic" fullWidth margin="dense" label="Password" variant="outlined"
                 value={password}
                 onChange={(e) => { setPassword(e.target.value) }} />

                <Button variant="contained" fullWidth component="span" style={{ marginTop: '1.5rem' }}
                   onClick={loginHandler}>
                  Log in
                </Button>
              </div>
              <div className="bottom-card">
              Don&apos;t Have an Account? <Link  to="/signup" style={{textDecoration:'none'}}><span style={{ color: 'blue' }}>Sign Up</span></Link>
              </div>
            </div>

          </div>







          {/* <br />

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
          >Login</button> */}
        </>

      }
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


export default connect(mapStateToProps, mapDispatchToProps)(Login)