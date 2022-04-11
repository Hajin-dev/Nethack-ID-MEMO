import React,{useState,useEffect}from 'react';
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

import { useCookies } from "react-cookie";

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
    {value:10,s1:5,s2:4,b1:0,b2:0},
    {value:30,s1:15,s2:11,b1:0,b2:0},
    {value:50,s1:25,s2:19,b1:0,b2:0},
    {value:40,s1:20,s2:15,b1:0,b2:0},
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
  const [armorDB,setArmor] = useState([
    {ar:0, ap: "plumed helmet",base: 0, name: 0},
    {ar:0, ap: "etched helmet",base: 0, name: 0},
    {ar:0, ap: "crested helmet",base: 0, name: 0},
    {ar:0, ap: "visored helmet",base: 0, name: 0},
    {ar:1, ap: "tattered cape",base: 0, name: 0},
    {ar:1, ap: "ornamental cope",base: 0, name: 0},
    {ar:1, ap: "opera cloak",base: 0, name: 0},
    {ar:1, ap: "piece of cloth",base: 0, name: 0},
    {ar:2, ap: "old gloves",base: 0, name: 0},
    {ar:2, ap: "padded gloves",base: 0, name: 0},
    {ar:2, ap: "riding gloves",base: 0, name: 0},
    {ar:2, ap: "fencing gloves",base: 0, name: 0},
    {ar:3, ap: "mud boots",base: 0, name: 0},
    {ar:3, ap: "snow boots",base: 0, name: 0},
    {ar:3, ap: "riding boots",base: 0, name: 0},
    {ar:3, ap: "buckled boots",base: 0, name: 0},
    {ar:3, ap: "hiking boots",base: 0, name: 0},
    {ar:3, ap: "combat boots",base: 0, name: 0},
    {ar:3, ap: "jungle boots",base: 0, name: 0},
  ])
  const [bookDB,setBook] = useState([
    {no:0, ap: "bronze",base: 0, name: 0},
    {no:1, ap: "cloth",base: 0, name: 0},
    {no:2, ap: "copper",base: 0, name: 0},
    {no:3, ap: "cyan",base: 0, name: 0},
    {no:4, ap: "dark blue",base: 0, name: 0},
    {no:5, ap: "dark brown",base: 0, name: 0},
    {no:6, ap: "dark green",base: 0, name: 0},
    {no:7, ap: "dog eared",base: 0, name: 0},
    {no:8, ap: "dull",base: 0, name: 0},
    {no:9, ap: "dusty",base: 0, name: 0},
    {no:10, ap: "glittering",base: 0, name: 0},
    {no:11, ap: "gold",base: 0, name: 0},
    {no:12, ap: "gray",base: 0, name: 0},
    {no:13, ap: "indigo",base: 0, name: 0},
    {no:14, ap: "leather",base: 0, name: 0},
    {no:15, ap: "light blue",base: 0, name: 0},
    {no:16, ap: "light brown",base: 0, name: 0},
    {no:17, ap: "light green",base: 0, name: 0},
    {no:18, ap: "magenta",base: 0, name: 0},
    {no:19, ap: "mottled",base: 0, name: 0},
    {no:20, ap: "orange",base: 0, name: 0},
    {no:21, ap: "parchment",base: 0, name: 0},
    {no:22, ap: "pink",base: 0, name: 0},
    {no:23, ap: "plaid",base: 0, name: 0},
    {no:24, ap: "purple",base: 0, name: 0},
    {no:25, ap: "ragged",base: 0, name: 0},
    {no:26, ap: "red",base: 0, name: 0},
    {no:27, ap: "shining",base: 0, name: 0},
    {no:28, ap: "silver",base: 0, name: 0},
    {no:29, ap: "stained",base: 0, name: 0},
    {no:30, ap: "tan",base: 0, name: 0},
    {no:31, ap: "thick",base: 0, name: 0},
    {no:32, ap: "thin",base: 0, name: 0},
    {no:33, ap: "turquoise",base: 0, name: 0},
    {no:34, ap: "vellum",base: 0, name: 0},
    {no:35, ap: "velvet",base: 0, name: 0},
    {no:36, ap: "violet",base: 0, name: 0},
    {no:37, ap: "white",base: 0, name: 0},
    {no:38, ap: "wrinkled",base: 0, name: 0},
    {no:39, ap: "yellow",base: 0, name: 0}])
  const [ringDB,setRing]=useState([{no:0, ap: "agate",base: 0, name: 0},     
  {no:1, ap: "black onyx",base: 0, name: 0},
  {no:2, ap: "brass",base: 0, name: 0},     
  {no:3, ap: "bronze",base: 0, name: 0},    
  {no:4, ap: "clay",base: 0, name: 0},      
  {no:5, ap: "copper",base: 0, name: 0},    
  {no:6, ap: "coral",base: 0, name: 0},     
  {no:7, ap: "diamond",base: 0, name: 0},   
  {no:8, ap: "emerald",base: 0, name: 0},   
  {no:9, ap: "engagement",base: 0, name: 0},
  {no:10, ap: "gold",base: 0, name: 0},     
  {no:11, ap: "granite",base: 0, name: 0},  
  {no:12, ap: "iron",base: 0, name: 0},     
  {no:13, ap: "ivory",base: 0, name: 0},    
  {no:14, ap: "jade",base: 0, name: 0},     
  {no:15, ap: "moonstone",base: 0, name: 0},
  {no:16, ap: "opal",base: 0, name: 0},     
  {no:17, ap: "pearl",base: 0, name: 0},    
  {no:18, ap: "ruby",base: 0, name: 0},     
  {no:19, ap: "sapphire",base: 0, name: 0}, 
  {no:20, ap: "shiny",base: 0, name: 0},    
  {no:21, ap: "silver",base: 0, name: 0},   
  {no:22, ap: "steel",base: 0, name: 0},    
  {no:23, ap: "tiger eye",base: 0, name: 0},
  {no:24, ap: "topaz",base: 0, name: 0},    
  {no:25, ap: "twisted",base: 0, name: 0},  
  {no:26, ap: "wire",base: 0, name: 0},     
  {no:27, ap: "wooden",base: 0, name: 0},  ])
  const [wandDB,setWand]=useState([{no:0, ap: "aluminum",base: 0, name: 0}, 
  {no:1, ap: "balsa",base: 0, name: 0},    
  {no:2, ap: "brass",base: 0, name: 0},    
  {no:3, ap: "copper",base: 0, name: 0},   
  {no:4, ap: "crystal",base: 0, name: 0},  
  {no:5, ap: "curved",base: 0, name: 0},   
  {no:6, ap: "ebony",base: 0, name: 0},    
  {no:7, ap: "forked",base: 0, name: 0},   
  {no:8, ap: "glass",base: 0, name: 0},    
  {no:9, ap: "hexagonal",base: 0, name: 0},
  {no:10, ap: "iridium",base: 0, name: 0}, 
  {no:11, ap: "iron",base: 0, name: 0},    
  {no:12, ap: "jeweled",base: 0, name: 0}, 
  {no:13, ap: "long",base: 0, name: 0},    
  {no:14, ap: "maple",base: 0, name: 0},   
  {no:15, ap: "marble",base: 0, name: 0},  
  {no:16, ap: "oak",base: 0, name: 0},     
  {no:17, ap: "pine",base: 0, name: 0},    
  {no:18, ap: "platinum",base: 0, name: 0},
  {no:19, ap: "runed",base: 0, name: 0},
  {no:20, ap: "short",base: 0, name: 0},
  {no:21, ap: "silver",base: 0, name: 0},
  {no:22, ap: "spiked",base: 0, name: 0},
  {no:23, ap: "steel",base: 0, name: 0},
  {no:24, ap: "tin",base: 0, name: 0},
  {no:25, ap: "uranium",base: 0, name: 0},
  {no:26, ap: "zinc",base: 0, name: 0},])
  const [scrollDB,setScroll]=useState([{no:0, ap: "ABRA KA DABRA",base: 0, name: 0},
  {no:1, ap: "ANDOVA BEGARIN",base: 0, name: 0},
  {no:2, ap: "ASHPD SODALG",base: 0, name: 0},
  {no:3, ap: "DAIYEN FOOELS",base: 0, name: 0},
  {no:4, ap: "DUAM XNAHT",base: 0, name: 0},
  {no:5, ap: "EIRIS SAZUN IDISI",base: 0, name: 0},
  {no:6, ap: "ELAM EBOW",base: 0, name: 0},
  {no:7, ap: "ELBIB YLOH",base: 0, name: 0},
  {no:8, ap: "ETAOIN SHRDLU",base: 0, name: 0},
  {no:9, ap: "FNORD",base: 0, name: 0},
  {no:10, ap: "FOOBIE BLETCH",base: 0, name: 0},
  {no:11, ap: "GARVEN DEH",base: 0, name: 0},
  {no:12, ap: "GHOTI",base: 0, name: 0},
  {no:13, ap: "GNIK SISI VLE",base: 0, name: 0},
  {no:14, ap: "HACKEM MUCHE",base: 0, name: 0},
  {no:15, ap: "HAPAX LEGOMENON",base: 0, name: 0},
  {no:16, ap: "JUYED AWK YACC",base: 0, name: 0},
  {no:17, ap: "KERNOD WEL",base: 0, name: 0},
  {no:18, ap: "KIRJE",base: 0, name: 0},
  {no:19, ap: "KO BATE",base: 0, name: 0},
  {no:20, ap: "LEP GEX VEN ZEA",base: 0, name: 0},
  {no:21, ap: "LOREM IPSUM",base: 0, name: 0},
  {no:22, ap: "MAPIRO MAHAMA DIROMAT",base: 0, name: 0},
  {no:23, ap: "NR 9",base: 0, name: 0},
  {no:24, ap: "PHOL ENDE WODAN",base: 0, name: 0},
  {no:25, ap: "PRATYAVAYAH",base: 0, name: 0},
  {no:26, ap: "PRIRUTSENIE",base: 0, name: 0},
  {no:27, ap: "READ ME",base: 0, name: 0},
  {no:28, ap: "STRC PRST SKRZ KRK",base: 0, name: 0},
  {no:29, ap: "TEMOV",base: 0, name: 0},
  {no:30, ap: "THARR",base: 0, name: 0},
  {no:31, ap: "VAS CORP BET MANI",base: 0, name: 0},
  {no:32, ap: "VE FORBRYDERNE",base: 0, name: 0},
  {no:33, ap: "VELOX NEB",base: 0, name: 0},
  {no:34, ap: "VENZAR BORGAVVE",base: 0, name: 0},
  {no:35, ap: "VERR YED HORRE",base: 0, name: 0},
  {no:36, ap: "XIXAXA XOXAXA XUXAXA",base: 0, name: 0},
  {no:37, ap: "XOR OTA",base: 0, name: 0},
  {no:38, ap: "YUM YUM",base: 0, name: 0},
  {no:39, ap: "ZELGO MER",base: 0, name: 0},
  {no:40, ap: "ZLORFIK",base: 0, name: 0},])
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
    } 
  setValue();
  const handleChange = (event, newValue) => {
    setCh(newValue);
    setValue();
    console.log(price)
  };
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(['userDB']);

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
        <Route path="/Armor" theme={theme} element={<Armor armorDB={armorDB} price={price} setArmor={setArmor}/>} />
        <Route path="/Scroll" theme={theme} element={<Scroll scrollDB={scrollDB} price={price} setScroll={setScroll}/>} />
        <Route path="/SpellBook" theme={theme} element={<SpellBook bookDB={bookDB} price={price} setBook={setBook}/>} />
        <Route path="/Potion" theme={theme} element={<Potion potionDB={potionDB} price={price} setPotion={setPotion}/>} />
        <Route path="/Ring" theme={theme} element={<Ring ringDB={ringDB} price={price} setRing={setRing}/>} />
        <Route path="/Wand" theme={theme} element={<Wand wandDB={wandDB} price={price} setWand={setWand}/>} />  
      </Routes>
      </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
