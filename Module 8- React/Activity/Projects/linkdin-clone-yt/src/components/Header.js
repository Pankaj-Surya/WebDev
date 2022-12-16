import React from 'react'
import '.././Style/Header.css'
import logo from '.././assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import {auth} from ".././firebase"
import { getAuth, signOut } from "firebase/auth";
import {logout } from ".././features/userSlice"

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp =async () => {
    dispatch(logout());
    const auth =await getAuth();
     await signOut(auth)
  }

  return (
    <div className='header'>
       <div className="header__left">
          <img src={logo} alt="logo" />
          <div className="header__search">
            {/* icon */}
            <SearchIcon></SearchIcon>         
            {/* Textbox */}
            <input placeholder='Search'  type="text" />
          </div>
       </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon}/>
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messaging" Icon={ChatIcon}/>
        <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOption 
         avatar="data:image/png;base64,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"
        title="me" onCLick={logoutOfApp}/>
      </div>
    </div>
  )
}

export default Header