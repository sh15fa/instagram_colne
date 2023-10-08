import React from 'react';
import Divider from '@mui/material/Divider';
import saleWoman from '../images/StoriesAvatars/saleswoman.png';
import driver from '../images/StoriesAvatars/driver.png';
import cockMan from '../images/StoriesAvatars/cock-man.png';
import femaleChef from '../images/StoriesAvatars/female-chef.png';
import flight from '../images/StoriesAvatars/flight-attendant.png';
import graduater from '../images/StoriesAvatars/graduated-student.png';
import farmer from '../images/StoriesAvatars/farmer-avatar.png';
import './Home.css';
import boy from '../images/Avatars/boy.png'
import steward from '../images/Avatars/steward.png';
import singer from '../images/Avatars/singer.png';
import shop from '../images/Avatars/shop-assistant.png';
import nurse from '../images/Avatars/nurse.png';





export default function Home() {
    const story=[
        {
        id:1,
        name: 'ameena',
        img:saleWoman

    },
    {
        id:2,
        name: 'moath',
        img:driver

    },
    {
        id:3,
        name: 'obada',
        img:cockMan

    },
    {
        id:4,
        name: 'saja',
        img:femaleChef

    },
    {
        id:5,
        name: 'dalal',
        img:flight

    },
    {
        id:6,
        name: 'ahmad',
        img:graduater

    },
    {
        id:7,
        name: 'adel',
        img:farmer

    }

]

const followings=[
    {
    id:1,
    name: 'Ward Daraghmeh',
    desc: 'Followed by moath',
    img:steward
},
{
    id:2,
    name: 'Batool Azzam',
    desc: 'Followed by anwar',
    img:singer
},
{
    id:3,
    name: 'Omar Yasin',
    desc: 'New to instagram',
    img:cockMan
},
{
    id:4,
    name: 'Anwar Ghannam',
    desc: 'Followed by hala',
    img:nurse
},
{
    id:5,
    name: 'Jenan Kmail ',
    desc: 'New to instagram',
    img:shop
},
]

const stories=story.map((stori)=>{
    console.log(stori.img);
    return <div key={stori.id} className='story'>
    <div className='storyImg' >
        <img src={stori.img} alt='story' />
    </div>
        
        <div>{stori.name}</div>
    </div>
});
const follows=followings.map((follow)=>{
    return <div className='following1' style={{margin:'0'}} key={follow.id}>
    <div className='switch'>
        <img src={follow.img} alt='avatar' className='avatar1'/>
        <div style={{ margin: '5px 8px 5px'}}>
            <b style={{fontSize:'13px'}}>
                {follow.name}
            </b>
            <p className='name1'>
                {follow.desc}
            </p>
        </div>
    </div>
    <p className='follow'>
        Follow
    </p>

  </div>

});

  return (
    <div className='home'>
    <div>
        <div className='stories'>
            {stories}
        </div>
        <Divider/>
        {/* posts */}
      </div> 
      <div className='following'>
      <div className='following1'>
        <div className='switch'>
            <img src={boy} alt='avatar' className='avatar'/>
            <div style={{margin:'15px 17px 5px'}}>
                <p className='name'>
                    mman9our
                </p>
                <p className='name1'>
                    Mohamed Mansour
                </p>
            </div>
        </div>
        <p className='follow'>
            Follow
        </p>

      </div>
      <div className='following1'>
        <p className='sug'>Suggestions for you</p>
        <p className='more'>See more</p>
      </div>
        {follows}
      </div> 
        
        

    </div>
  )
}
