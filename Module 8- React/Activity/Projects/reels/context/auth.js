import React, { useEffect } from 'react'
import { auth } from '.././firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from 'firebase/auth'

export const AuthContext = React.createContext()
function AuthWrapper({ children }) {

    const [user, setUser] = React.useState("")
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }else{
                setUser("")
            }
        })
        setLoading(false)
    }, [])

    async function login(email, password) {
        await signInWithEmailAndPassword(auth, email, password)
    }

    async function logout() {
        await setUser('')
        return await signOut(auth);
    }

    async function forget(email) {
        return await sendPasswordResetEmail(auth, email)
    }

    async function signup(email, password) {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    const store = {
        login,
        logout,
        forget,
        signup,
        user
    }

    console.log("AuthWrapper HEllo");
    return (
        <div>
            <AuthContext.Provider value={store}>
                {!loading && children}
            </AuthContext.Provider>

        </div>
    )
}

export default AuthWrapper