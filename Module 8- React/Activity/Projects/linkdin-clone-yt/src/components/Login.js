import React, { useState } from 'react'
import ".././Style/Login.css"
import loginLogo from ".././assets/loginLogo.png"
import auth from "../firebase"
function Login() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic,setProfilePic] = useState("");
  const loginToApp = (e) => {
    e.preventDefault();
  }
  const register = () => {

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