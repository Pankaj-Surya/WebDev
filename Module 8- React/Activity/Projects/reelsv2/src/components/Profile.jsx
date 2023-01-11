import React,{useMemo} from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from 'react-redux-firebase';
import { auth } from '../firebase';
import {firestore} from '../firebase';
import { database } from '../firebase';
import ResponsiveAppBar from './Navbar';

import '../Style/profile.css'


const parr=[];



function Profile(props) {
  
  const [name ,setName]= React.useState("");
  const [email ,setEmail]= React.useState("");
  const [url ,setUrl]= React.useState("");
  const [post,setPost] = React.useState([])
  
  const nPost = useMemo(()=>{
    return {post}
  },[post])

  React.useEffect(()=>{
    async function fn(){
        console.log(props.firebase.auth);
        if(isLoaded(props.firebase.auth)){
          console.log(props.firebase.auth.uid)
         let docSnap =await firestore.collection("users").doc(props.firebase.auth.uid).get();
         let userData = await docSnap.data();
         console.log("userData ",userData);
         setEmail(userData.email);
         setName(userData.name);
         setUrl(userData.profileImageLink);
    
        // let listOfPost = await snapShot.docs.map(doc=>doc.data());
        // setPost(listOfPost) 
        // console.log(listOfPost);
        // console.log("profile post videos end")
        } else{
          return ;
        } 
    } fn()
  },[props.firebase.auth])

  React.useEffect(()=>{
    async function fn1(){
        if(isLoaded(props.firebase.auth)){
        // profile post videos
        // console.log("profile post videos start")
         const snapShot = await database.posts.where("userName", "==", name).get()
               
        if (snapShot.docs.length > 0) {
          await  snapShot.docs.forEach(doc => {
              // doc is a DocumentSnapshot with actual data
              const data = doc.data();
               parr.push(data)
          })
        }
      // console.log("parr",parr)
       await setPost(parr)
  
      
       // console.log("post length",post.length);
       console.log("post -->",post);
        // let listOfPost = await snapShot.docs.map(doc=>doc.data());
        // setPost(listOfPost) 
        // console.log(listOfPost);
        //console.log("npost",nPost)
        console.log("profile post videos end")
        } else{
          return ;
        } 
    } fn1()
  },[post.length])

  return (
      <>
      <ResponsiveAppBar></ResponsiveAppBar>
      {
        isLoaded(props.firebase.auth) && props.firebase.auth?.uid == undefined ?
        <Redirect to="/login"></Redirect> :
        <>
         <div>
                <div className='profile_upper'>
                <img style={{height:"8rem",width:"8rem",borderRadius:"50%"}}
                 src={url} alt="img" />    
                 <div style={{flexBasis:"40%"}}>
                        <h1>{name}</h1>
                        <h2>{email}</h2>
                        <h3>Posts : {post.length}</h3> 
                        
                  </div>
               
               <hr />

               <div className='profile_videos'>
                    {
                        post.map((p,idx)=>(
                            <video key={idx} src={p.postReelVideoUrl}/>
                        ))
                    }
                </div>

                </div>
          </div>
                  
        </>
      }
      </>

  )
}


function mapStateToProps(store){
    return {
        auth : store.auth,
        firebase : store.firebase
    }
}

export default connect(mapStateToProps)(Profile)
