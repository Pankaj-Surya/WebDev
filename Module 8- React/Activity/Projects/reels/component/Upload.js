import React from 'react'
import Button from '@mui/material/Button';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LinearProgress from '@mui/material/LinearProgress';


function Upload() {
  return (
    <div style={{marginTop: '1.7rem'}}>
         <Button variant="outlined" className='upload-btn' startIcon={<MovieCreationIcon/>}  style = {{marginTop : '0.5rem'}}>Upload Video</Button>
         <LinearProgress variant="determinate" style={{margin:'0.1rem',width: '15 rem'}} value={20} /> 
    </div>
  )
}

export default Upload