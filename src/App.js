import React,{useState}from 'react';
import{ BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
//import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme,makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Navi from "./navi/Navi";

import Amulet from "./pages/Amulet"
import Armor from "./pages/Armor"
import Scroll from "./pages/Scroll"
import SpellBook from "./pages/SpellBook"
import Potion from "./pages/Potion"
import Ring from "./pages/Ring"
import Wand from "./pages/Wand"

import '@fontsource/roboto';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';

let theme = createTheme({
    typography:{
    "fontFamily":[
      'Open Sans','sans-serif'
    ].join(","),
  }
  }
);

const useStyles = makeStyles({
  setchMargin:{
    border: 0,
    margin: '5px 0px'
  },
  setChFont:{
    fontFamily: 'Roboto Mono'
  }
})
theme.spacing(4)
function App() {
  const [ch,setCh]= useState(10);
  var price= //가격표(price DB)
  [ {value:8,s1:4,s2:3,b1:0,b2:0},
    {value:30,s1:15,s2:11,b1:0,b2:0},
    {value:50,s1:25,s2:19,b1:0,b2:0},
    {value:40,s1:20,s2:15,b1:0,b2:0},
    {value:50,s1:25,s2:19,b1:0,b2:0},
    {value:60,s1:30,s2:23,b1:0,b2:0},
    {value:20,s1:10,s2:8,b1:0,b2:0},
    {value:80,s1:40,s2:30,b1:0,b2:0},
    {value:100,s1:50,s2:38,b1:0,b2:0},
    {value:200,s1:100,s2:75,b1:0,b2:0},
    {value:300,s1:150,s2:113,b1:0,b2:0},
    {value:150,s1:75,s2:56,b1:0,b2:0},
    {value:250,s1:125,s2:94,b1:0,b2:0},
    {value:175,s1:88,s2:66,b1:0,b2:0},
    {value:200,s1:100,s2:75,b1:0,b2:0},
    {value:500,s1:250,s2:188,b1:0,b2:0},
    {value:400,s1:200,s2:150,b1:0,b2:0},
    {value:600,s1:300,s2:225,b1:0,b2:0},
    {value:700,s1:350,s2:263,b1:0,b2:0}];
  const [amuletDB,setAmulet] = useState([
    {no:0, ap: "circular", name: 0},
    {no:1, ap: "spherical", name: 0},
    {no:2, ap: "oval", name:  0},
    {no:3, ap: "triangular", name: 0},
    {no:4, ap: "pyramidal", name: 0},
    {no:5, ap: "square", name: 0},
    {no:6, ap: "concave", name: 0},
    {no:7, ap: "hexagonal", name: 0},
    {no:8, ap: "octagonal", name: 0},
  ])
  const [potionDB,setPotion] = useState( [
    {no:0,ap: "black",base:0, name: 0},
    {no:1,ap: "brilliant-blue",base:0, name: 0},
    {no:2,ap: "brown",base:0, name: 0},
    {no:3,ap: "bubbly",base:0, name: 0},
    {no:4,ap: "cloudy",base:0, name: 0},
    {no:5,ap: "cyan",base:0, name: 0},
    {no:6,ap: "dark-green",base:0, name: 0},
    {no:7,ap: "dark",base:0, name: 0},
    {no:8,ap: "effervescent",base:0, name: 0},
    {no:9,ap: "emerald",base:0, name: 0},
    {no:10,ap: "fizzy",base:0, name: 0},
    {no:11,ap: "golden",base:0, name: 0},
    {no:12,ap: "magenta",base:0, name: 0},
    {no:13,ap: "milky",base:0, name: 0},
    {no:14,ap: "murky",base:0, name: 0},
    {no:15,ap: "orange",base:0, name: 0},
    {no:16,ap: "pink",base:0, name: 0},
    {no:17,ap: "puce",base:0, name: 0},
    {no:18,ap: "purple-red",base:0, name: 0},
    {no:19,ap: "ruby",base:0, name: 0},
    {no:20,ap: "sky-blue",base:0, name: 0},
    {no:21,ap: "smoky",base:0, name: 0},
    {no:22,ap: "swirly",base:0, name: 0},
    {no:23,ap: "white",base:0, name: 0},
    {no:24,ap: "yellow",base:0, name: 0},
  ])
  var k = 1;
  function setValue (){ //CH에 따른 가격 보정 (price will multiplied by CH )
    if (ch<6) k=2;
    if (ch>5 && ch<10) k=3/2;
    if (ch>7 && ch<11) k=4/3;
    if (ch>10 && ch<16) k=1;
    if (ch>15 && ch<18) k=3/4;
    if (ch===18) k=2/3;
    if (ch>18) k=1/2;
    price.forEach((v,i,a)=>{
      price[i].b1=Math.round(v.value*k)
      price[i].b2=Math.round(v.value*k*(4/3))
    })
    console.log(theme)
    } 
  setValue();
  function calPotion(x) {
    setPotion(x)
  }
  const handleChange = (event, newValue) => {
    setCh(newValue);
    setValue();
    console.log(price)
  };
  const classes = useStyles();
  return(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth="sm">
      <Navi/>
      <Grid className={classes.setchMargin} container spacing={2} alignItems="center" direction="row">
        <Grid item xs>
          <Typography classes={{body1:classes.setChFont}} align="center" id="Ch-slider">
          Set CH
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Slider aria-label="Ch-slider"value={ch} onChange={handleChange} min={3} max={25} valueLabelDisplay="auto"/>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
      <Routes>
        <Route path="/Amulet" theme={theme} element={<Amulet amuletDB={amuletDB} setAmulet={setAmulet}/>} />
        <Route path="/Armor" theme={theme} element={<Armor/>} />
        <Route path="/Scroll" theme={theme} element={<Scroll/>} />
        <Route path="/SpellBook" theme={theme} element={<SpellBook/>} />
        <Route path="/Potion" theme={theme} element={<Potion potionDB={potionDB} setPotion={calPotion}/>} />
        <Route path="/Ring" theme={theme} element={<Ring/>} />
        <Route path="/Wand" theme={theme} element={<Wand/>} />  
      </Routes>
      </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
