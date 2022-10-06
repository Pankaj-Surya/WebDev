<div className="login-container">
    <div className="carbg">
        <div className='car'>
            <Carousel showIndicators={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                interval={2000}
                autoPlay={true}
                showArrows={false}
            >
                <Image src={bg1}></Image>
                <Image src={bg2}></Image>
                <Image src={bg3}></Image>
            </Carousel>
        </div>
    </div>

    <div>
        <div className='login-card'>
            <Image src={insta} />

            <TextField size="small" margin='dense' id="outlined-basic" fullWidth
                label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField size="small" margin='dense' id="outlined-basic" fullWidth
                label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />

            {
                error != '' &&
                <div style={{ color: 'red' }}>{error}</div>
            }

            <Button variant="contained" fullWidth
                style={{ marginTop: '1rem' }} onClick={handleClick} disabled={loading}>
                Login In
            </Button>
            <div style={{ color: 'blue', marginTop: '0.5rem' }}>Forgot Password ?</div>

        </div>
        <div className='bottom-card'>
            Don&apos;t Have an Account? <Link href="/signup"><span style={{ color: 'blue' }}>Sign Up</span></Link>
        </div>
    </div>89
</div>
