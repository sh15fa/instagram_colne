import './App.css';
import MainBar from './components/MainBar';
import { ThemeProvider,Paper, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme=createTheme({
  palette:{
    mode:'dark',
    primary:{
      main: '#ffffff'
    },
    secondary:{
      main:'#1D1D1D'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <Paper>
      <MainBar/>
      </Paper>
    {/* <BrowserRouter>

      
    

      <Router>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/reels' element={<Reels/>}/>
        <Route path='/massenger' element={<Massenger/>}/>
        <Route path='/notification' element={<Notifications/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/myProfile' element={<MyProfile/>}/>
      </Router>
    </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;
