import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Feed() {
  return (
    <div className='feed-container'>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Upload */}
      <Upload />
      {/* reels */}
      <div className='videos-container'>
           
           <div className='post-container'>
              <video src="https://firebasestorage.googleapis.com/v0/b/insta-reels-37f1b.appspot.com/o/posts%2F7ad7a35e-1dc1-4949-8d11-100b61e48786?alt=media&token=db8b4ac6-293b-47bc-8c6e-96e26eb0872c"></video>
              
              <div className='videos-info'>
              <div className='avatar-container'><Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              <p>Name</p>
              </div>
              <div className='post-like' >
              <FavoriteIcon fontSize='large'></FavoriteIcon>
              10
              </div>
              </div>   
          </div>

          <div className='post-container'>
              <video src=""></video>
              
              <div className='videi-info'>
              <img src="" alt="" />
              <p>Name</p>
              </div>   
          </div>
      </div>
    </div>
  )
}

export default Feed