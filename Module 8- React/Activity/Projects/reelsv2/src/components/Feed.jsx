import React,{useState,sueEffect} from 'react'
import { useEffect } from 'react'
import { database } from '../firebase'
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
   <>
   {
    post.map((post,idx)=>{
     return(
      <div key={idx} className="post-container">
      <video controls autoPlay src={post.postReelVideoUrl} />
      <div className="videos-info">
          <div className="avatar_container">
              <Avatar alt="Remy Sharp" src={post.userImg} sx={{ margin: "0.5rem" }} />
              <p style={{ color: "white", fontWeight: "bold" }}>{post.userName}</p>
          </div>
  
          <div className="post-like">
              <FavoriteIcon fontSize="large" style={ { color: "red" } }  />
              
          </div>
      </div>
    </div>
     )
    }
    ) 
}
   </>

  //   <div className="post-container">
  //   <video src={post.postReelVideoUrl} />
  //   <div className="videos-info">
  //       <div className="avatar_container">
  //           <Avatar alt="Remy Sharp" src={post.userImg} sx={{ margin: "0.5rem" }} />
  //           <p style={{ color: "white", fontWeight: "bold" }}>{post.userName}</p>
  //       </div>

  //       <div className="post-like">
  //           <FavoriteIcon fontSize="large" style={ { color: "red" } }  />
            
  //       </div>
  //   </div>
  // </div>

    //    <div className='videos-container'>
         
    //     {
    //       post.map((post,idx)=>{
    //           return (
    //             <div key={idx} className='post-container'> 
    //               <video src={post.postReelVideoUrl}
    //                autoPlay={true} 
    //                muted></video>
    //               <div>{post.userName}</div>
    //               <img src={post.userImg} style={{ height: "40px" }} />
    //             </div>
    //           )
    //       })
    //     }
    // </div>

  )
}

export default Feed