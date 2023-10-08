import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Explore from './Explore';
import Reels from './Reels';
import Massenger from './Massenger';
import Notifications from './Notifications';
import Create from './Create';
import MyProfile from './MyProfile';
import {  Typography } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../images/instagram-logo.png';
import '../App.css';
const drawerWidth = 240;

export default function MainBar() {
  return (
    <BrowserRouter>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
      <Typography variant='h6' noWrap component='div' style={{padding:'20px 15px' }}>
      <img src={logo} alt='logo' className='logo'/>

      </Typography>
        
        <List>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <HomeIcon/>
                </ListItemIcon>
                <Link to={'/'} className='links'><ListItemText primary='Home' /></Link>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <SearchIcon/>
                </ListItemIcon>
                <Link to={'/search'} className='links'><ListItemText primary='Search' /></Link>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <ExploreIcon/>
                </ListItemIcon>
                <Link to={'/explore'} className='links'><ListItemText primary='Explore' /></Link>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <SlideshowIcon/>
                </ListItemIcon>
                <Link to={'/reels'} className='links'><ListItemText primary='Reels' /></Link>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <ChatIcon/>
                </ListItemIcon>
                <Link to={'/massenger'} className='links'><ListItemText primary='Masseges' /></Link>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <FavoriteBorderIcon/>
                </ListItemIcon>
                <Link to={'/notification'} className='links'><ListItemText primary='Notifications' /></Link>
              </ListItemButton>
            </ListItem>
            <Create/>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <PersonIcon/>
                </ListItemIcon>
                <Link to={'/myProfile'} className='links'><ListItemText primary='My Profile' /></Link>
              </ListItemButton>
            </ListItem>
        </List>
       
      
      </Drawer>
    
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/reels' element={<Reels/>}/>
        <Route path='/massenger' element={<Massenger/>}/>
        <Route path='/notification' element={<Notifications/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/myProfile' element={<MyProfile/>}/>
      </Routes>
        {/* <Toolbar /> */}
        
      </Box>
      
    </Box>
  
    </BrowserRouter>
  );
}
