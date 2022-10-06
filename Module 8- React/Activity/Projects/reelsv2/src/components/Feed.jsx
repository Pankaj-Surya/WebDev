import React,{useState,sueEffect} from 'react'
import { useEffect } from 'react'
import { database } from '../firebase'


function Feed() {
  let [post,setPost] = useState([])

  useEffect(()=>{
    async function fn(){
      console.log("hello")
      const snapShot = await database.posts.get()
      let listOfPost = await snapShot.docs.map(doc=>doc.data());
      setPost(listOfPost) 
      console.log(listOfPost);
      console.log("hello end")
    }
    fn();
  },[])

  return (
    <div >
      
        {
          post.map((post,idx)=>{
              return (
                <div key={idx}> 
                  <video src={post.postReelVideoUrl}
                   autoPlay={true} 
                   muted></video>
                  <div>{post.userName}</div>
                  <img src={post.userImg} style={{ height: "40px" }} />
                </div>
              )
          })
        }
    </div>

  )
}

export default Feed