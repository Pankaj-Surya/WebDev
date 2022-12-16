import React, { useState } from 'react'
import ".././Style/Login.css"
import loginLogo from ".././assets/loginLogo.png"
//import auth from "../firebase"
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {login} from ".././features/userSlice"
function Login() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, 
    setPassword] = useState("");
  const [profilePic,setProfilePic] = useState("");
  const dispatch = useDispatch();
  
  const loginToApp = (e) => {
    e.preventDefault();
  }
  const register =async () => {
    if(!name){
      alert("Please enter your name") 
      return
    }else if(!email){
      alert("Please enter your email")
      return
    }else if(!password){
      alert("Please enter your password")
      return
    }else{
      console.log("enter")
      const auth = getAuth();
      // register the user in firebase
      const userAuth =await createUserWithEmailAndPassword(auth,email,password)
      const user =await userAuth.user;
      console.log(" User From Login : ",user)
      // Update a user's profile
      // profilePic - copy image address -> Error : too long URL
      const updateProfileInfo = await updateProfile(auth.currentUser,{
         displayName : name,
         photoURL : profilePic
      })
      console.log("updatedProfile  : ",updateProfileInfo)
      dispatch(login({
        email : userAuth.user.email,
        uid : userAuth.user.uid,
        displaName : name,
        photoURL : profilePic
      }))

      
    }

    setName("")
    setEmail("")
    setProfilePic("")
    setPassword("")
    alert("user Logged In Successfully")
  }


  return (
    <div className='login'>
      <img src={loginLogo} alt="" />
      <form>
        <input placeholder='Full Name (required if registering)' type="text" 
         value={name} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder='Profile pic URL (optional)' type="text" 
        value={profilePic} onChange={e=>setProfilePic(e.target.value)}/>
        <input placeholder='Email' type="email"
        value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input placeholder='Password' type="password"
         value={password} onChange={(e)=>setPassword(e.target.value)}  />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a remember? {" "}
        <span onClick={register} className='login__register'>Register Now</span>
      </p>
    </div>
  )
}

export default Login