import React from 'react';
import axios from 'axios';
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
import like from '../images/Icons/Lİke.svg';
import comment from '../images/Icons/Comment.svg';
import save from '../images/Icons/Save.svg';
import SharePosts from '../images/Icons/SharePosts.svg';





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

const postss=[
    {
    id:1,
    img:singer,
    name:'Nada Ahmad',
    post:'https://www.toa.edu.my/static/styles/images/programme/dg/dg-dip-hero.webp',
    likes:500,
    commentName:'Safa',
    comment:'Enjoying a peaceful evening by the beach, watching the sun set over the horizon. The colors are simply breathtaking. ️🤍'

},
{
    id:2,
    img:flight,
    name:'Ruba Salem',
    post:'https://www.bhg.com/thmb/Png_RwypjtceaJgZkb4Rl81gk64=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-flaky-biscuits-Hero-01-B-b09e956a95d24b0e9fe30cb1fca9721a.jpg',
    likes:225,
    commentName:'',
    comment:''

},
{
    id:3,
    img:graduater,
    name:'Soltan Ali',
    post:'https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?c=16x9&q=h_720,w_1280,c_fill',
    likes:300,
    commentName:'Seed Azzam',
    comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ️😎'

},

];

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
const postss1=postss.map((p)=>{
    return <div key={p.id} className='ppost'>
        <div className='postCreator'>
            <img src={p.img} alt=''/>
            <span>{p.name}</span>
        </div>
        <div>
            <img src={p.post} alt='' className='createdPost'/>
        </div>
        <div className='active1'>
            <div className='active'>
                <img src={like} alt=''/>
                <img src={comment} alt=''/>
                <img src={SharePosts} alt=''/>
            </div>
            <div>
            <img src={save} alt=''/>
            </div>
        </div>
        <div className='likes'>{p.likes} Likes</div>
        <div>
            <div className='likes'>
                {p.commentName}
            </div>
            <div className='comm'>
                {p.comment}
            </div>
        </div>
    </div>

})

  return (
    <div className='home'>
    <div className='left'>
        <div className='stories'>
            {stories}
        </div>
        <Divider/>
        {/* posts */}
        {postss1}
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
