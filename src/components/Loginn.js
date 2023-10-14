import * as React from 'react';
import android from '../images/androidScreen.png';
import apple from '../images/iPhoneScreen.png';
import inst from '../images/instagram-logo.png';
import face from '../images/Icons/Facebook Fill.png'
import Divider from '@mui/material/Divider';

import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


export default function Login() {
  const [userDats,setUserData]=useState({
    email:'',
    password:''
  });

  const navigate=useNavigate();

  function hadleSubmit(e){
    e.preventDefault();

    axios.post('http://16.170.173.197/users/login',userDats)
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
       <div className='log'>
          <img src={inst} alt='' className='logo'/>
          <form onSubmit={hadleSubmit}>
            <input type='text' placeholder='Email or Mobile Number' value={userDats.email}
              onChange={(e)=>{setUserData({...userDats,email:e.target.value})}}
            />
            <input type='password' placeholder='Password' value={userDats.password}
              onChange={(e)=>{setUserData({...userDats,password:e.target.value})}}/>
            <button type='submit'>Login</button>
          </form>
          <Divider>or</Divider>
          <button style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src={face} alt=''/>
            <span>Login with Facebook</span>
          </button>
          <div style={{fontSize:'12px',color:'gray'}}>
            Forgot Password ?
          </div>

       </div>
       <div className='new'>
        <span>Don't have an account ?</span> <Link to ='/signup'>Signup</Link>
       </div>
       </div>
       
    </div>
    
  );
}

