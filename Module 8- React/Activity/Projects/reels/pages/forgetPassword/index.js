import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import insta from '../../assets/insta.jpg'
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import { AuthContext } from '../../context/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
function index() {
    const router = useRouter(AuthContext)
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { forget, user } = useContext(AuthContext)

    async function handleClick() {
        try {
            setLoading(true)
            setError('')
            await forget(email)
            alert('Email Sent')
            router.push('/login')
        } catch (error) {
            console.log(error.message);
            setError(error.message)
            setTimeout(()=>{
              setError('')
            },3000)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (user) {
            router.push("/")
        } else {
            console.log("user not logged in")
        }
    }, [user])

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
                        <Image src={bg1} alt='bg1' />
                        <Image src={bg2} alt='bg2' />
                        <Image src={bg3} alt='bg3' />
                    </Carousel>
                </div>
            </div>
            {/*2.Right Login Container*/}
            <div>
                <div className='login-card'>
                    <Image src={insta} alt='logo' ></Image>
                    <TextField id="outlined-basic" size='small' label="Email" variant="outlined"
                        margin='dense' fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                    {
                        error != ' ' &&
                        <div style={{ color: 'red' }}>{error}</div>

                    }
                    <Button variant="contained" fullWidth style={{ marginTop: '0.5rem' }}
                        onClick={handleClick} disabled={loading} >Send Email</Button>
                </div>
                <div className='bottom-card'>
                    <p>Don't Have an Account ? <Link href='/signup' ><span style={{ color: 'blue' }}> SignUp</span></Link> </p>
                </div>
            </div>
        </div>
    )
}

export default index