import React, { useContext, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import insta from '.././assets/insta.jpg'
import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';
import Link from 'next/link'

const settings = ['Profile', 'Logout'];

function ResponsiveAppBar({userData}) {
  //console.log("Navbar usrdata ->",userData);  
  const {logout,user} = useContext(AuthContext);
  
  console.log("Navbar user",user)
  const  router= useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  async function handleLogout(){
    await logout();
    router.push("/login")
    return
  }

  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         <Image src={insta} height={55} width={200} alt='logo'></Image>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        
          </Box>

          <Box sx={{ flexGrow: 0 }} className="nav-icons-container">
            <HomeIcon className='nav-icons' fontSize='large'></HomeIcon>
            <ExploreIcon className='nav-icons' fontSize='large'></ExploreIcon>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, m:0.8 }}>
                <Avatar alt="Remy Sharp" src={userData?.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem  onClick={handleCloseUserMenu}>
                <Link href='/profile'>
                  <Typography textAlign="center">Profile</Typography>
                </Link>
                </MenuItem>

                <MenuItem  onClick={()=>{
                   handleLogout()
                  handleCloseUserMenu()
                  
                }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
