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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
            <form className='form'>
             {/* <div> <label>
               Title <br/>
                <input type='text'/>
              </label></div> */}
              <div>
              <label>
               Description <br/>
                <input type='text' className='textarea'/>
              </label></div>
              <div className='btns'>
              <button>Choose Image</button></div>
              <div className='btns'>
              <button>Post</button></div>
            </form>
            
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}