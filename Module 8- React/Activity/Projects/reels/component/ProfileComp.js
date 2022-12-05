import React from 'react'
import Navbar from '.././component/Navbar'
function ProfileComp() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [post, setPost] = React.useState([])

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className='profile_upper'>


                    <img style={{ height: "8rem", width: "8rem", borderRadius: "50%" }}
                        src="https://firebasestorage.googleapis.com/v0/b/reels-next-c61db.appspot.com/o/5xoY2tCdmrVn2jTe6o2tT4NZYiB2%2FProfile?alt=media&token=ed05e4ca-8bcf-43aa-a53e-5d2967ae752c" alt="img" />
                    <div style={{ flexBasis: "40%" }}>
                        <h1>name</h1>
                        <h2>email</h2>
                        <h3>Posts : {post.length}</h3>

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