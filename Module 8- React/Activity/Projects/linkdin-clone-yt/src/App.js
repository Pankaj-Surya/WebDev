import React,{useEffect} from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {login,logout} from ".././src/features/userSlice"
import Widgets from './components/Widgets';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = userAuth.uid;
        console.log("user from app onAuthChange :",userAuth)
        dispatch(login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName, 
          photoUrl : userAuth.photoURL,
        }))
        
        
      } else {
        dispatch(logout())
      }
    }); 
  },[])
  
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (<Login />) :
        (
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets></Widgets>
          </div>
        )
      }




    </div>
  );
}

export default App;
