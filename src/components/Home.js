import React, { useEffect } from 'react';
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
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditModal from './EditModal';


  
  const ITEM_HEIGHT = 48;

  


export default function Home() {
const [memories, setMemories] = useState([]);
const token = localStorage.getItem("token");
useEffect(()=>{
    axios
    .get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
        console.log(response);
      setMemories(response.data.posts);
    })
    .catch((error) => {
      console.log("Error Fedching memories", error);
    });
},[]);
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
const handleDeletePost = (postId) => {
  console.log('hellllo0',postId)
    
    axios
      .request({
        method: "delete",
        url: `http://16.170.173.197/posts/${postId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedMemories = memories.filter((memory) => {
          return memory.id !== postId;
        });
        setMemories(updatedMemories);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
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
const postss1=memories.map((p)=>{
    return <div key={p.id} className='ppost'>
        <div style={{display:'flex',justifyContent:'space-between'}}><div className='postCreator'>
            <img src={p.user.avatar} alt=''/>
            <span>{p.user.userName}</span>
        </div>
        <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {/* <MenuItem>Edit</MenuItem> */}
        <EditModal postId={p.id} desc={p.description} imgPost={p.image} setpost={setMemories}/>
        <MenuItem  onClick={()=>handleDeletePost(p.id)}>Delete</MenuItem>
           
        
      </Menu>
    </div></div>
        <div>
            <img src={p.image} alt='' className='createdPost'/>
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
        <div className='likes'>700 Likes</div>
        <div>
            {/* <div className='likes'>
                 {p.commentName} 
            </div> */}
            <div className='comm'>
                {p.description}
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
