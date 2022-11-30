import React, { useEffect } from 'react'
import {auth} from '.././firebase'
import {signInWithEmailAndPassword,onAuthStateChanged,signOut, sendPasswordResetEmail} from 'firebase/auth'

export const AuthContext = React.createContext()
function AuthWrapper({children}) {
    
    const [user,setUser] = React.useState(null)
    const [loading,setLoading] = React.useState(true)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
        setLoading(false)
    },[])

 async function login(email, password) {
       await signInWithEmailAndPassword(auth, email, password)
    }

  async function logout(){
       return await signOut(auth); 
    }

  async  function forget(email) {
        return await sendPasswordResetEmail(auth, email)
    }
    
    const store = {
        login,
        logout,
        forget,
        user
    }

    console.log("AuthWrapper HEllo");
    return (
    <div>
        <AuthContext.Provider value={store}>
          { !loading &&  children}
        </AuthContext.Provider>
       
    </div>
)}

export default AuthWrapper