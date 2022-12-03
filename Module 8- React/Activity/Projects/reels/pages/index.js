import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Feed from '../component/Feed'
import Navbar from '../component/Navbar'
import { AuthContext } from '../context/auth'
export default function Home() {

  const {user} = useContext(AuthContext)
  const Redirect = () => {
    const router = useRouter();
    router.push("/login")
    return null;
  }
  return (
    <div >
      <Navbar></Navbar>
      {
        user?.uid ?  <Feed></Feed> : <Redirect></Redirect>
      }
     
    </div>
  )
}
