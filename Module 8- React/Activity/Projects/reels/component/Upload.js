import React, { useState } from 'react'
import Button from '@mui/material/Button';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid'
import { doc, setDoc, serverTimestamp,updateDoc, arrayUnion } from "firebase/firestore"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage,db} from '.././firebase'

function Upload({ userData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileLimit = 50;

  const handleChange = (e) => {
    console.log("enter in handleChange")
    e.preventDefault()
    const file = e.target.files[0];
    console.log(file)

    if (file == null) {
      setError("Please select a file")
      setTimeout(() => {
        setError("")
      }, 3000)
      return;
    }
    console.log(file.size)
    if ((file.size/(1024 * 1024)) > fileLimit) {
      setError(`file too large,try uploading a file less than ${fileLimit}MB `)
      setTimeout(() => {
        setError("")
      }, 3000)
      return;
    }

    let uid = uuidv4();
    setLoading(true);
    console.log("status ---->",loading)
    
    // where -location path in storage
    const storageRef = ref(storage, `${userData.uid}/posts/${uid}`);
    
    // which file to uopload in storage
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog)
        console.log('Upload is ' + prog + '% done');

      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error.message)
        setError(err.message)
        setTimeout(() => {
        setError("")
        }, 3000)
        return;
        
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log('File available at', downloadURL);
          let obj = {
            likes : [],
            postId : uid,
            postUrl : downloadURL,
            profileName : userData.name,
            profileUrl : userData.photoURL,
            uid : userData.uid,
            timestamp : serverTimestamp()
          }
          console.log(obj)
          //set doc
          await setDoc(doc(db, "posts", uid), obj);
          console.log("post added in post collection")
          await updateDoc(doc(db,"users",userData.uid),
          {
            posts : arrayUnion(uid)
          })
          console.log("doc added")
          setLoading(false);
          setProgress(0)

        });
      }
    );
 

  }
  return (
    <div style={{ marginTop: '1.7rem' }} className="upload-btn">
      
      {

        error != "" ? <Alert severity="error">{error}</Alert> :
          (
            <Button variant="outlined" color="secondary" startIcon={<MovieCreationIcon />} component="label" size="large" >
              Upload Media
              <input
                hidden
                accept="*"
                multiple
                type="file"
                onChange={handleChange} />
            </Button>
          )
        // (<Button variant="outlined" startIcon={<MovieCreationIcon/>}  style = {{marginTop : '0.5rem'}}>
        //   <input hidden
        //       accept="*"
        //       multiple
        //       type="file"
        //   onChange={handleChange} />
        //   Upload
        // </Button>)            
      }

      {
       loading && (<LinearProgress variant="determinate" style={{ margin: '0.1rem', width: '15 rem' }} value={progress} />)
      }

    </div>
  )
}

export default Upload