import React from 'react'
import './MyProf.css';
import proImg from '../images/profile.jpg';
import more from '../images/Icons/Options.svg';
import MyProfTabs from './MyProfTabs';

export default function MyProfile() {
  return (
    <div className='profile'>
    <div className='profDetails'>
      <div>
        <img src={proImg} alt='' className='profImg'/>
      </div>
      <div className='details'>
      <div className='prof'>
        <h4>shahdabuhamed</h4>
        <button>Edit Profile</button>
        <button>View Actions</button>
        <img src={more} alt=''/>

      </div>
      <div className='follow1'>
        <div>12 Posts</div>
        <div>150 followers </div>
        <div>500 following</div>

      </div>
      <div>
        <div>
          Shahd
        </div>
        <div>
          @aaup.edu
        </div>
        <div>
        “What we think, we become.” 
        </div>
      </div>
      
      </div>
    </div>
    <MyProfTabs/>
    </div>
  )
}
