import React, { useState,useContext,useEffect } from 'react'
import Navbar from '.././component/Navbar'
import { AuthContext } from '../context/auth';
import { doc, onSnapshot } from "firebase/firestore";
import {db} from ".././firebase"
function ProfileComp() {
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        console.log("user", user);
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
          console.log("doc", doc.data());
          setUserData(doc.data());
        });
        return () => unsub();
      }, [user]);

    return (
        <div>
            <Navbar userData={userData}/>
            <div>
                <div className='profile_upper'>

                    <img style={{ height: "8rem", width: "8rem", borderRadius: "50%" }}
                     src={userData.photoURL} alt="img" />
                    <div style={{ flexBasis: "40%" }}>
                        <h3>Name : {userData.name}</h3>
                        <h3>Email : {userData.email}</h3>
                        <h3>Posts : {userData.posts?.length}</h3>

                    </div>
                </div>
                <div style={{ borderBottom: '1px solid black' }}></div>

                <div className='profile_videos'>
                    
                        {/* // post.map((p, idx) => (
                        //     <video key={idx} src={p.postReelVideoUrl} />
                        // )) */}
                        <video style={{ backgroundColor: 'red' }} />
                        <video style={{ backgroundColor: 'red' }} />
                        <video style={{ backgroundColor: 'red' }} />
                        <video style={{ backgroundColor: 'red' }} />
                    
                </div>


            </div>
        </div>
    )
}

export default ProfileComp