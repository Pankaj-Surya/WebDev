import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { database, storage } from '../firebase';
import { connect } from "react-redux";

import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';


function UploadVideo(props) {
    const [filePath, setFilePath] = useState("")

    function UploadVideoHandler(){
        console.log("USER ID",props.userId)
        try {
            // unique -> uuid4 -> unique id 
            const postId = uuidv4().toString();
            console.log("PostID", postId);
            const uploadtask =
                storage.ref(`/posts/${postId}`).put(filePath);
            uploadtask.on("state_changed",
                progressCb,
                errorCb,
                successCb)
            function progressCb(snapShot) {
                var progress = (
                    snapShot.bytesTransferred /
                    snapShot.totalBytes) * 100;
                console.log("Progress: ", progress, "%");
            }
            function errorCb(err) {
                console.log(err.message);
                //console.log(err.payload);
            }
            async function successCb() {
                // image upload -> complete
                // img url
                console.log("success cb start")
                const reelVideoUrl = await uploadtask.snapshot.ref.getDownloadURL()
                console.log("reel URL",reelVideoUrl);
                    // firebaseReducer -> home -> upload Video
                const userResp = await  database.users.doc(`${props.firebase.auth.uid}`).get();

                console.log("USER ID",props.firebase.auth.uid)
                    
                const userDoc = userResp.data();
                console.log("userDoc",userDoc)
                // profileImageLink
                // name
                let postObj = {
                    userName: userDoc.name,
                    userImg: userDoc.profileImageLink,
                    postReelVideoUrl: reelVideoUrl,
                    likes: [],
                    comments: [],
                    createdAt: database.getCurrentTimeStamp()
                }
                await database.posts.doc(`${postId}`).set(postObj);
                console.log("Post created");
                setFilePath("");

            }
        } catch (err) {
            console.log(err.message)
        }
        
       
    }

    return (
    <div className='upload-btn'>

          <Button  variant="outlined" startIcon={<MovieIcon />} fullWidth  component="label"  style={{marginTop:'0.5rem'}}
            onClick={UploadVideoHandler}>
            Upload
            <input hidden accept="image/*" multiple type="file" 
             onChange={(e) => {
              setFilePath(e.target.files[0]);
              // console.log(e.target.files)f
            }}/>
         </Button>

        {/* <input type="File" onChange={(e) => {
         setFilePath(e.target.files[0]);
       }}></input>
       <button onClick={UploadVideoHandler}>Upload</button> */}
    </div>
  )
  
}



function mapStateToProps(store){
    return {
        auth : store.auth,
        firebase : store.firebase
    }
}

export default connect(mapStateToProps)(UploadVideo)

