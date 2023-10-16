import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Divider from '@mui/material/Divider';
import './Explore.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Create() {
  const inputRef=useRef(null);
  const [description, setdescription] = useState("");
  const [image,setImage]=useState("");
 
  const [imageCover, setImageCover] = useState(null);;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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



  const handledescriptionChange = (event) => {
    setdescription(event.target.value);
  };
 
 

  const handleImageChange=(e)=>{
    const file=e.target.files[0];
    console.log(file);
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  }
  let formData = new FormData();

  formData.append("description", description)
  formData.append("image", image);
  const handleImageClick=()=>{
    inputRef.current.click();
  }
  function handleSubmit(e) {
    e.preventDefault();


    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      setMemories((prevMomeris) => [ response.data,...prevMomeris])
      console.log('done')
    }).catch((error) => {
      console.log("Error:", error)
    })

    handleClose();
    console.log('done');
    alert('post is created');

    
  }
  return (
    <div >
      <ListItem  onClick={handleOpen} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <AddCircleOutlineIcon/>
                </ListItemIcon>
                <Link  className='links'><ListItemText primary='Create' /></Link>
              </ListItemButton>
            </ListItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={{textAlign:'center',margin:'10px 0'}}>
              Create New Post
            </div>
            <Divider/>
            <form className='form' onSubmit={handleSubmit}>
              
              <label htmlFor='desc'>
               Description <br/>
                <input type='text' className='textarea' id='desc' 
                value={description}
                  onChange={handledescriptionChange}
                  required
                />
              </label>
              <div style={{margin:'0'}}>
              <div onClick={handleImageClick}>
              {imageCover && 
                <img src={imageCover} alt='' style={{ width: "100%", marginBottom: "1rem",height:'40vh',objectFit:'contain' }}/> }
                <input type='file' ref={inputRef} style={{display:'none'}} onChange={handleImageChange}/>
              </div>
              <label htmlFor="image-upload">
              <button className='btns' type='button' onClick={handleImageClick}>Choose Image</button></label>
              </div>
              
       
              
              <button className='btns' type='submit'>Post</button>
            </form>
            
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
