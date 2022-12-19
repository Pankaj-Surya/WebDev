import React,{useEffect, useState,useContext} from 'react'
import Upload from './Upload'
import { AuthContext } from '.././context/auth';
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import {db } from '.././firebase'
import Navbar from './Navbar'
import Post from './Post';
import { PostAddSharp } from '@mui/icons-material';

function Feed() {
 // get user from context
 const { user } = useContext(AuthContext)
 const [userData,setUserData] = useState({})
 const [posts,setPosts] = useState([])

// get user from firestore
useEffect(()=>{
  //console.log("uid -->",user.uid);
  const unsub = onSnapshot(doc(db,"users",user.uid), 
            (doc) => {
              console.log("Feed User : ",doc.data());
              setUserData(doc.data())
            })
            return () => {
              unsub();
            }
},[user])


//get posts from db -> works as CDM
// useEffect(()=>{
//   const unsub = onSnapshot(query(collection(db,"posts"),orderBy("timestamp","desc")),(snapshot)=>{
//       let tempArray = [];
//       snapshot.docs.map(doc => tempArray.push(doc))
//       console.log(tempArray)
//       setPosts(...tempArray)
//       console.log(posts);
//       console.log(posts.length);
//     })
//   return ()=>unsub()
// },[])

//get all posts from db -> works as CDM
useEffect(() => {
  const unsub = onSnapshot(query(collection(db, "posts"), 
  orderBy("timestamp", "desc")), (snapshot) => {
    const tempArray = [];
    snapshot.docs.map(doc => tempArray.push(doc.data()))
    setPosts([...tempArray]);
    console.log(posts);
  })
  return ()=>unsub()
}, []);

  return (
    <div className='feed-container'>
      {/* Navbar */}
      <Navbar userData={userData} ></Navbar>    
      {/* Upload */}
      <Upload userData={userData} />
      {/* reels */}

      <div className='videos-container'>
            {console.log(posts)}
            {
              posts.map(
                (post)=>{
                // {
                //   console.log( `Post  --> ` , post)
                // }
                <Post postData={post} userData={userData}/>
              })
            }
           <Post/>
      </div>
    </div>
  )
}

export default Feed