import React, { useState } from 'react'
import { auth } from '../firbaseConfig';

function Fireauth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, SetUser] = useState("")


  React.useEffect(()=>{
    auth.onAuthStateChanged((user)=>SetUser(user))
  })

  async function createUser(){
        let res= await auth.createUserWithEmailAndPassword(email,password);
        console.log(res)
      }

  let login =async () => {
      let res = await auth.signInWithEmailAndPassword(email,password)
  }
  
  let logout = async() => {
    await auth.signOut();
  }

  return (
    <>
    {
      user==null? <div className='flex justify-center mt-10'>
      <div className="w-full max-w-xs ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="username">
              Email
            </label>
            <input value ={email} onChange={(e)=>setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="password">
              Password
            </label>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button onClick={login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
          </div>
        </form>
       
      </div>
    </div> :<><div>{user.email}</div>
              <button className='border' onClick={logout}>Logout</button></>
    }
      
    </>

  )
}

export default Fireauth