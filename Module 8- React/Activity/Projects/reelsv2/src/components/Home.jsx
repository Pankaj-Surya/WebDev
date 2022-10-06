import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from 'react-redux-firebase';
import Header from './Header';
import UploadVideo from './UploadVideo';
import Feed from './Feed';

import ResponsiveAppBar from './Navbar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Home(props) {
 
    const [progress, setProgress] = React.useState(0);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, [])


  return (
      <>
      {
        isLoaded(props.firebase.auth) && props.firebase.auth?.uid == undefined ? <Redirect to="/login"></Redirect> :
        <div className='feed-container'>
       
        
        <ResponsiveAppBar></ResponsiveAppBar>
        <Header ></Header>
        <UploadVideo ></UploadVideo> 
        
        <Box sx={{ width: '15rem',marginTop:'0.2rem',marginBottom:'0.5rem' }}>
      <LinearProgress variant="determinate" value={progress} />
    
      </Box>
        {
          console.log(props.firebase.auth.uid)
        }
        
        <Feed ></Feed>
        </div>   
  
    }
      </>
  )
}

function mapStateToProps(store){
    return {
       auth : store.auth,
       firebase : store.firebase
    }
}

export default connect(mapStateToProps)(Home)