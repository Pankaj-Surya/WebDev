import React from 'react'
import {auth} from "../firebase"
import {Link} from 'react-router-dom'
import UploadVideo from '../components/UploadVideo'
import Feed from "../components/Feed"


async function logoutHandler(){
   await auth.signOut();
}

//48
function Header() {
  return (
    <>
       <div>Header</div>
       <Link to='/profile'>Profile</Link>
       <button onClick={logoutHandler}>LogOut</button>

    </>
 

  )
}

export default Header