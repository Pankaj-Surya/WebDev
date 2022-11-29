import Head from 'next/head'
import Image from 'next/image'
import ResponsiveAppBar from '../component/navbar'
import feed from '../component/Feed'

export default function Home() {
  return (
    <div >
      <ResponsiveAppBar></ResponsiveAppBar>
      <feed></feed>
    </div>
  )
}
