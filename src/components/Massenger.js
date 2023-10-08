import React from 'react';
import './Massenger.css';
import Divider from '@mui/material/Divider';

import ellipss from '../images/Icons/Ellipse 27.svg';
import nurce from '../images/Avatars/nurse.png';
import shop from '../images/Avatars/shop-assistant.png';
import singr from '../images/Avatars/singer.png';
import fchef from '../images/StoriesAvatars/female-chef.png';
import flight from '../images/StoriesAvatars/flight-attendant.png';
import sales from '../images/StoriesAvatars/saleswoman.png';






import arrow from '../images/Icons/Arrow.svg';
import newmsgs from '../images/Icons/NewMessages.svg';

export default function Massenger() {
  const masseges=[
    {
      id:1,
      name:'Anwar Ghannam',
      time:'.2s',
      msg:'اعطيهم تاسك صعب على ال..',
      ellips:ellipss,
      img:nurce
    },
    {
      id:2,
      name:'Jenan Kmail',
      time:'.7s',
      msg:'Lorem ipsum ipsumipsum',
      ellips:'',
      img:fchef
    },
    {
      id:3,
      name:'Suzan Sami',
      time:'.18s',
      msg:'Lorem ipsum ipsum',
      ellips:'',
      img:sales
    },
    {
      id:4,
      name:'Muna Musa',
      time:'.19s',
      msg:'Lorem ipsum ipsum',
      ellips:'',
      img:singr
    },
    {
      id:5,
      name:'Hiba Ahmad',
      time:'.20s',
      msg:'Lorem ipsum ipsum',
      ellips:'',
      img:shop
    },
    {
      id:6,
      name:'Rania Salman',
      time:'.1h',
      msg:'Lorem ipsum ipsum',
      ellips:ellipss,
      img:flight
    },
  ]
  ;
  
  const msges=masseges.map((msg)=>{
    return <div className='msges' style={{margin:'15px'}} key={msg.id}>
    <div className='switch'>
        <img src={msg.img} alt='avatar' className='avatar'/>
        <div style={{margin:'15px 17px 5px'}}>
            <p className='msgg'>
                {msg.name}
            </p>
            <div className='msg1'>
            <p className='msgg1'>
                {msg.msg}
            </p>
            <p className='msgg1'>
                {msg.time}
            </p>
            </div>
            
        </div>
    </div>
    <img src={msg.ellips} alt='' className='elips'/>

  </div>

});
  return (
    <div style={{display:'flex'}}>
    <div className='myMsgs'>
      <div className='me'>
        <span className='myname'>shahdabuhamed <img src={arrow} alt='arrow'/></span>
        <img src={newmsgs} alt='new msg'/>
        
      </div>
    <Divider/>
    <div style={{display:'flex',justifyContent:'space-between ',margin:'20px 0 20px 20px' }}>
    <p className='ms'>Masseges</p>
    <p className='requ'>Request</p>
    </div>
    
    {msges}
    
    </div>
    <Divider/>
    <div>
      hello
    </div>
    </div>
  )
}
