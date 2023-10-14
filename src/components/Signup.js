import * as React from 'react';
import android from '../images/androidScreen.png';
import apple from '../images/iPhoneScreen.png';
import inst from '../images/instagram-logo.png';
import face from '../images/Icons/Facebook Fill.png'
import Divider from '@mui/material/Divider';

import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function Signup() {
  const navigate=useNavigate();
  const [userDats,setUserData]=useState({
    userName:'',
    email:'',
    password:''
  });
  function hadleSubmit(e){
    e.preventDefault();

    axios.post('http://16.170.173.197/users/signup',userDats)
    .then((response)=>{
      console.log("helooooooo");
      const token=response.data.token;
      localStorage.setItem('token',token)
      navigate('/mainbar');


    }).catch((err)=>{
      console.log(err);
    });
    
  }
  
  return (
   
    <div className='auther'>
       <div className='phone'>
         <img src={android} alt=''/>
         <img src={apple} alt='' className='appl'/>
       </div>
       <div >
       <div className='log' style={{width:'unset'}}>
          <img src={inst} alt='' className='logo'/>
          <div style={{textAlign:'center',color:'gray'}}>Sign up to see photos and videos
 from your friends </div>
 <button style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src={face} alt=''/>
            <span>Login with Facebook</span>
          </button>
          <Divider>or</Divider>
          <form onSubmit={hadleSubmit}>
          <input type='text' placeholder='Username' value={userDats.userName} onChange={(e)=>{
            setUserData({...userDats,userName:e.target.value})
          }}/>
            <input type='text' placeholder='Email' value={userDats.email} onChange={(e)=>{
            setUserData({...userDats,email:e.target.value})
          }}/>
            <input type='password' placeholder='Password' value={userDats.password} onChange={(e)=>{
            setUserData({...userDats,password:e.target.value})
          }}/>
            <button type='submit'>Signup</button>
          </form>
         
          <div style={{fontSize:'12px',color:'gray'}}>
          By signing up, you agree to our Terms, Data
Policy and Cookies Police
          </div>

       </div>
       <div className='new' style={{width:'unset'}}>
        <span>Have an account? </span> <Link to ='/'>Log In</Link>
       </div>
       </div>
       
    </div>
    
  );
}

