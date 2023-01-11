import React from 'react'
import ProfileComp from '../../component/ProfileComp'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import {AuthContext} from '../.././context/auth'

function Index() {
  const {user} = useContext(AuthContext)
  
  const Redirect = () => {
    const router = useRouter();
    router.push("/login")
    return null;
    }

  return (
    <>
   
   
      {
        user?.uid ? <ProfileComp></ProfileComp> : <Redirect></Redirect>
      }
     
   
    </>
  )
}

export default Index;