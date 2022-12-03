import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import insta from '../../assets/insta.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/Link'
import { AuthContext } from '../../context/auth'
import { useRouter } from 'next/router'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage,db} from '../../firebase'
import { doc, setDoc } from "firebase/firestore";

function index() {
    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [filePath, setFilePath] = useState("")
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { signup, user } = useContext(AuthContext)

    async function handleClick() {
        try {
            setLoading(true)
            setError('')
            const userInfo = await signup(email, password)
            console.log(JSON.stringify(userInfo))
            alert('Signup up successfully')
            const storageRef = ref(storage, `${userInfo.user.uid}/Profile`);

            const uploadTask = uploadBytesResumable(storageRef, filePath);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                   
                },
                (error) => {
                    // Handle unsuccessful uploads
                    console.log(error.message)
                },
                 () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('File available at', downloadURL);
                        let obj = {
                            name : name,
                            email : email,
                            uid : userInfo.user.uid,
                            photoURL : downloadURL
                        }
                        //set doc
                        await setDoc(doc(db,"users",userInfo.user.uid),obj)
                        console.log("doc added")
                    });
                }
            );

        } catch (error) {
            console.log(error.message);
            setError(error.message)
            // setTimeout(()=>{
            //   setError('')
            // },3000)
        }
        setEmail('')
        setPassword('')
        setName('')
        setFilePath('')
        setLoading(false)
    }

    // useEffect(() => {
    //     if (user) {
    //         router.push("/")
    //     } else {
    //         console.log("user not logged in")
    //     }
    // }, [user])

    return (
        <div className='signup-container'>
            <div className='signup-card'>
                <Image src={insta} alt='logo'></Image>
                <TextField id="outlined-basic" size='small' label="Email" variant="outlined"
                    margin='dense' fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField id="outlined-basic" size='small' label="Password" type="password" variant="outlined"
                    margin='dense' fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                <TextField id="outlined-basic" size='small' label="Name" variant="outlined"
                    margin='dense' fullWidth value={name} onChange={(e) => setName(e.target.value)} />

                <Button variant="outlined" component="label" fullWidth
                    style={{ marginTop: '0.5rem' }}>
                    Upload
                    <input hidden accept="image/*" multiple type="file"
                        onChange={(e) => {
                            setFilePath(e.target.files[0]);
                             console.log(e.target.files[0])
                        }} />
                </Button>
                <Button variant="contained" fullWidth style={{ marginTop: '0.5rem' }}
                    onClick={handleClick} disabled={loading} >Sign UP</Button>
            </div>
            <div className='b   ottom-card'>
                <p>Already Have an Account ? <span style={{ color: 'blue' }}>
                    <Link href='/login'>Login</Link></span> </p>
            </div>
        </div>
    )
}

export default index