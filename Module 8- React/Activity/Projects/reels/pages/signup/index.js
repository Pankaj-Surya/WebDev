import React from 'react'
import Image from 'next/image'
import insta from '../../assets/insta.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function index() {
    return (
        <div className='signup-container'>
            <div className='signup-card'>
                <Image src={insta} ></Image>
                <TextField id="outlined-basic"  size='small' label="Email" variant="outlined"
                    margin='dense' fullWidth />
                <TextField id="outlined-basic" size='small' label="Password" type="password" variant="outlined"
                    margin='dense' fullWidth />
                <TextField id="outlined-basic" size='small' label="Name" variant="outlined"
                    margin='dense' fullWidth />
               
                <Button variant="outlined" component="label" fullWidth
                 style = {{marginTop : '0.5rem'}}>
                    Upload 
                    <input hidden accept="image/*" type="file" />
                </Button>
                <Button variant="contained" fullWidth  style = {{marginTop : '0.5rem'}}>SIgn UP</Button>
            </div>
            <div className='bottom-card'>
              <p>Already Have an Account ? <span style={{color:'blue'}}>Login</span> </p>
            </div>
        </div>
    )
}

export default index