import React, { useEffect, useState } from 'react'
import ".././Style/Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '.././firebase';
import { addDoc, collection, doc, onSnapshot, orderBy, query,serverTimestamp } from "firebase/firestore";

function Feed() {
    const [posts,setPosts] = useState([])
    const [input,setInput]= useState("")
    
    // keep track updated posts 
    useEffect( ()=>{
        console.log("feed useeffects start") 
        // collection ref
        const colRef=collection(db,"posts")
        // queries
        const q = query(colRef,orderBy("timestamp","desc"))
        // snapshots --> docs 
        const unsub = onSnapshot(q, (snapshot)=>{
            console.log("docs --->", snapshot.docs)
            setPosts(snapshot.docs.map(doc => (
                {
                    id : doc.id,
                    data : doc.data()
                }
            )
                ))
            console.log("feed useeffects end") 
        })
        return () => {
         unsub();
        }
 
    //   db.collection("posts").onSnapshot((snapshot)=>{
    //    setPosts(
    //     snapshot.docs.map((doc)=>(
    //         {
    //             id : doc.id,
    //             data : doc.data()
    //         }
    //     ))
    //    )
    //   })
    },[])

   
   
    // add post on click - in firestore
    const sendPost = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db,"posts"),{
            name : "Pankaj Suryavanshi",
            description : "This is a test",
            message : input,
            photoUrl : "",
            timestamp : serverTimestamp()
        })
        setInput("")
        console.log("Document written with ID: ", docRef.id);
        // V8
        
        // db.collection('posts').add({
        //     name : "Pankaj Suryavanshi",
        //     description : "This is a test",
        //     message : input,
        //     photoUrl : "",
        //     timestamp : serverTimestamp()     
        // })
    }
    return (
    <div className='feed'>
        <div className="feed__inputContainer">
         <div className="feed__input">
            <CreateIcon></CreateIcon>
            <form >
                <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
                <button onClick={sendPost} type='submit'>Submit</button>
            </form>   
         </div>
         <div className="feed__inputOptions">            
            <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo"/>
            <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video"/>
            <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event"/>
            <InputOption Icon={CalendarViewDayIcon} color="#7FC15E" title="Write article"/>
        </div>
        </div>
        
         {/* Posts */}
         { console.log("Posts",posts)}
         {
         posts.map(({id,data : {name,description,message,photoUrl}})=>(
          <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />   
         ))
        }
         
         {/* <Post
         name="Pankaj Suryavanshi"
         description="This is a test"
         message="WOW this worked"/> */}
    </div>
  )
}

export default Feed