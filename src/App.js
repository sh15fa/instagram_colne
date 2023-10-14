import './App.css';
import MainBar from './components/MainBar';
import { ThemeProvider,Paper, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/Loginn';
import Signup from './components/Signup';
import Home from './components/Home';
import Search from './components/Search';
import Explore from './components/Explore';
import Reels from './components/Reels';
import Massenger from './components/Massenger';
import Notifications from './components/Notifications';
import Create from './components/Create';
import MyProfile from './components/MyProfile';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ProtectedMainBar from './Routes/ProtectedMainBar';
import ProtectedAuth from './Routes/ProtectedAuth';

const darkTheme=createTheme({
  palette:{
    mode:'dark',
    primary:{
      main: '#ffffff'
    },
    secondary:{
      main:'#1D1D1D'
    }
  }
});

function App() {
  const [userData,setUseData]=useState({
    userName:'',
    email:'',
    password:''

  });


  return ( <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <Paper>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <MainBar/> */}
      </Paper>
   

      
    

      <Routes>
      <Route path='/' element={
        <ProtectedAuth><Login/></ProtectedAuth>
      }/>
      <Route path='/signup' element={
        <ProtectedAuth><Signup/></ProtectedAuth>
      }/>
      <Route path='/mainbar' element={
        <ProtectedMainBar>
      <MainBar/></ProtectedMainBar>
      }/>
        <Route path='/mainbar/home' element={
          <ProtectedMainBar><Home/></ProtectedMainBar>
        }/>
        <Route path='/mainbar/search' element={
          <ProtectedMainBar><Search/></ProtectedMainBar>
        }/>
        <Route path='/mainbar/explore' element={
          <ProtectedMainBar><Explore/></ProtectedMainBar>
        }/>
        <Route path='/mainbar/reels' element={ 
          <ProtectedMainBar><Reels/></ProtectedMainBar>
        }/>
        <Route path='/mainbar/massenger' element={
          <ProtectedMainBar><Massenger/></ProtectedMainBar>
        }/>
        <Route path='/mainbar/notification' element={
          <ProtectedMainBar><Notifications/></ProtectedMainBar>
        }/>
        <Route path='/mainbar/create' element={
          <ProtectedMainBar><Create/></ProtectedMainBar>
        }/>
        <Route path='/mainbar/myProfile' element={
          <ProtectedMainBar><MyProfile/></ProtectedMainBar>
        }/>
      </Routes>
   
    </ThemeProvider> </BrowserRouter>
  );
}

export default App;
