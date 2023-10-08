import React from 'react';
import rocket from '../images/rocket-launch.png';
import fire from '../images/Icons/fire-svgrepo-com.svg';
import './InProgress.css';

export default function InProgress() {
  return (
    <div className='prog'>
    <h2>InProgress <img src={fire} alt=''/></h2>
    <p>This page is currently under construction and will be comming soon</p>
    <img src={rocket} alt='' className='rock'/>
    </div>
  )
}
