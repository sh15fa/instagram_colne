import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';

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

export default function EditModal({postId, desc,imgPost,post,setpost}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true);
  console.log(postId)
console.log(desc)}
  const handleClose = () => setOpen(false);
  const inputRef=useRef(null);
  const [description, setdescription] = useState(desc);
  const [image,setImage]=useState(imgPost);
  const [imageCover, setImageCover] = useState(imgPost);;

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
  const token = localStorage.getItem("token");
  function handleEdit(e){
    e.preventDefault();
 
    console.log(postId);
    axios
    .request({
      method: "put",
      url: `http://16.170.173.197/posts/${postId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);

    })
    .catch((error) => {
      console.error("Error deleting post:", error);
    });
    handleClose();
  }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <MenuItem onClick={handleOpen}>Edit</MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
            Edit Your Post
          </Typography>
          <form className='form' onSubmit={handleEdit}>
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
              <button className='btns' type='button' onClick={handleImageClick}>Change Image</button></label>
              </div>
              <button className='btns' type='submit'>Edit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}