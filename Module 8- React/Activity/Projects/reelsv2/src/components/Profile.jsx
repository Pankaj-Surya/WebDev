import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from 'react-redux-firebase';
import { auth } from '../firebase';
import {firestore} from '../firebase';

function Profile(props) {
  
  const [name ,setName]= React.useState("");
  const [email ,setEmail]= React.useState("");
  const [url ,setUrl]= React.useState("");

  React.useEffect(()=>{
    async function fn(){
        console.log(props.firebase.auth);
        if(isLoaded(props.firebase.auth)){
         let docSnap =await firestore.collection("users").doc(props.firebase.auth.uid).get();
         let userData = await docSnap.data();
         console.log("userDSta ",userData);
         setEmail(userData.email);
         setName(userData.name);
         setUrl(userData.profileImageLink);
        } else{
          return ;
        } 
    } fn()
  },[props.firebase.auth])

  return (
      <>
      {
        isLoaded(props.firebase.auth) && props.firebase.auth?.uid == undefined ?
        <Redirect to="/login"></Redirect> :
        <>
         <h1>Profile Page</h1>
         <div>Email : {email} </div>
         <img  style={{
          borderColor: "red",
          borderWidth: 5,
          borderRadius: 90,
          height: 100,
          width: 200
        }} src={url} alt="img" />
         <div>Name : {name}</div>
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