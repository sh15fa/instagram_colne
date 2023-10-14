
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import post1 from '../images/Icons/Posts.svg'
import reel1 from '../images/Icons/Save.svg'
import tag from '../images/Icons/Tagged.svg'
import reel from '../images/Icons/whitereels.svg';
import post from '../images/Icons/Carousel.svg';
import './MyProfile';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyProfTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const posts=<div>
    <img src={post1} alt='' style={{marginRight:'7px'}}/>
    <span>Posts</span>
  </div>
  const reels=<div>
  <img src={reel1} alt='' style={{marginRight:'7px'}}/>
  <span>Reels</span>
</div>
const tags=<div>
<img src={tag} alt='' style={{marginRight:'7px'}}/>
<span>Tagged</span>
</div>

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='proTabs'>
        
          <Tab label={posts} {...a11yProps(0)} />
          <Tab label={reels} {...a11yProps(1)} />
          <Tab label={tags} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className='posts1' >
      {itemData.map((item) => (
        <div key={item.img} style={{position:'relative'}} >
          <img
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={item.img}
            alt={item.title}
            style={{height:'170px', width:'190px'}}
          />
          <img src={item.type} alt='' className='image11'/>
          

        </div>
      ))}
    </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className='myReels' >
      {itemData1.map((item) => (
        <div key={item.img} style={{position:'relative'}} >
          <img
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={item.img}
            alt={item.title}
            
            style={{height:'170px', width:'150px'}}
          />
          <img src={item.type} alt='' className='image111'/>
          

        </div>
      ))}
    </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className='posts1' >
      {itemData2.map((item) => (
        <div key={item.img} style={{position:'relative'}} >
          <img
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={item.img}
            alt={item.title}
            style={{height:'170px', width:'190px'}}
          />
          <img src={item.type} alt='' className='image11'/>
          

        </div>
      ))}
    </div>
      </CustomTabPanel>
    </Box>
  );
}

const itemData = [
   
    {
      img: 'https://e3.365dm.com/23/08/768x432/skynews-supermoon-moon-spain_6237866.jpg?20230802092006',
      title: 'Mushrooms',
      type:post
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42J9uSJxo_OumIKOTwWt_hDsL8KWDCI_m1Q&usqp=CAU',
      title: 'Tomato basil',
      type:''
    },
    {
      img: 'https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg',
      title: 'Sea star',
      type:''
    },
    {
      img: 'https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/01/210910570-4.jpg?fit=805%2C405&ssl=1',
      title: 'Bike',
      type:''
    },
    {
        img: 'https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*',
        title: 'Bike',
        type:post
      },
  ];

  const itemData1 = [
    {
      img: 'https://assets.website-files.com/5dcb04c0d422cb3dba508f4b/5e4d9e35aa74d70fedad5b01_appareil-thumbnail.jpg',
      title: 'Breakfast',
     
    },
    {
      img: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-93275134-612x612-1674575937.jpg?crop=0.668xw:1.00xh;0.128xw,0&resize=640:*',
      title: 'Sink',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
      title: 'Books',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://www.lobstershack.com.au/wp-content/uploads/2023/02/Sea-Lion-1080x675.jpg',
      title: 'Burger',
      
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://i1.wp.com/funmoneymom.com/wp-content/uploads/2021/08/Beauty-And-The-Beast-Movie-Poster.jpg',
      title: 'Blinds',
    },
   ]
   const itemData2 = [
   
    {
      img: 'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg',
      title: 'Sink',
    },
    {
      img: 'https://images.everydayhealth.com/images/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg',
      title: 'Books',
    },
    {
      img: 'https://imemc.org/wp-content/uploads/2016/04/Issa-Khoury1-1.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://blog.japanwondertravel.com/wp-content/uploads/2021/11/yukiya-shiba-LSyjrJFV-pw-unsplash.jpg',
      title: 'Burger',
      
    },
    
   ]