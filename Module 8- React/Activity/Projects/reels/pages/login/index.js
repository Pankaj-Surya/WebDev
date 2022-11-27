import React from 'react'
import Image from 'next/image'
import insta from '../../assets/insta.jpg'
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
function index() {
    return (
        <div className='login-container'>
            {/*1.Left Carosoul Img */}
            <div className="carbg">
              <div className='car'>
                <Carousel showIndicators={false}
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  interval={2000}
                  autoPlay={true}
                  showArrows={false}>
                  <Image src={bg1} />
                  <Image src={bg2} />
                  <Image src={bg3} />
                </Carousel>
              </div>
            </div>
            {/*2.Right Login Container*/}
            <div>
            <div className='login-card'>
                <Image src={insta} ></Image>
                <TextField id="outlined-basic"  size='small' label="Email" variant="outlined"
                    margin='dense' fullWidth />
                <TextField id="outlined-basic" size='small' label="Password" type="password" variant="outlined"
                    margin='dense' fullWidth />
                 <div style={{color:'red'}}>uha error aayega</div> 
                
                <Button variant="contained" fullWidth  style = {{marginTop : '0.5rem'}}>Log In</Button>
                <div style={{color:'blue',margin: '0.5rem'}}>Forget Password ?</div>
            </div>
            <div className='bottom-card'>
              <p>Don't Have an Account ? <span style={{color:'blue'}}> SignUp</span> </p>
            </div>
            </div>
        </div>
    )
}

export default index