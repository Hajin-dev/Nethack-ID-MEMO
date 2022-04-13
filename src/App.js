import React,{useState,useEffect}from 'react';
import{ BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';
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
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineClear } from "react-icons/ai";
import Checkbox from '@material-ui/core/Checkbox';
import { BiCookie,BiCheck,BiX } from "react-icons/bi";
import SvgIcon from '@material-ui/core/SvgIcon';
import {setCookie, getCookie,removeCookie} from "./cookie"

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const am = [
{no:0, ap:0, name: 0},
{no:1, ap: 1, name: 0},
{no:2, ap: 2, name:  0},
{no:3, ap: 3, name: 0},
{no:4, ap: 4, name: 0},
{no:5, ap: 5, name: 0},
{no:6, ap: 6, name: 0},
{no:7, ap: 7, name: 0},
{no:8, ap: 8, name: 0},]
const ar = [
{ar:0, ap: 0,base: 0, name: 0},
{ar:0, ap: 1,base: 0, name: 0},
{ar:0, ap: 2,base: 0, name: 0},
{ar:0, ap: 3,base: 0, name: 0},
{ar:1, ap: 4,base: 0, name: 0},
{ar:1, ap: 5,base: 0, name: 0},
{ar:1, ap: 6,base: 0, name: 0},
{ar:1, ap: 7,base: 0, name: 0},
{ar:2, ap: 8,base: 0, name: 0},
{ar:2, ap: 9,base: 0, name: 0},
{ar:2, ap: 10,base: 0, name: 0},
{ar:2, ap: 11,base: 0, name: 0},
{ar:3, ap: 12,base: 0, name: 0},
{ar:3, ap: 13,base: 0, name: 0},
{ar:3, ap: 14,base: 0, name: 0},
{ar:3, ap: 15,base: 0, name: 0},
{ar:3, ap: 16,base: 0, name: 0},
{ar:3, ap: 17,base: 0, name: 0},
{ar:3, ap: 18,base: 0, name: 0},]
const po = [
{no:0,base:0,name:0},
{no:1,base:0,name:0},
{no:2,base:0,name:0},
{no:3,base:0,name:0},
{no:4,base:0,name:0},
{no:5,base:0,name:0},
{no:6,base:0,name:0},
{no:7,base:0,name:0},
{no:8,base:0,name:0},
{no:9,base:0,name:0},
{no:10,base:0,name:0},
{no:11,base:0,name:0},
{no:12,base:0,name:0},
{no:13,base:0,name:0},
{no:14,base:0,name:0},
{no:15,base:0,name:0},
{no:16,base:0,name:0},
{no:17,base:0,name:0},
{no:18,base:0,name:0},
{no:19,base:0,name:0},
{no:20,base:0,name:0},
{no:21,base:0,name:0},
{no:22,base:0,name:0},
{no:23,base:0,name:0},
{no:24,base:0,name:0},
]
const bo = [
{no:0,base:0,name:0},
{no:1,base:0,name:0},
{no:2,base:0,name:0},
{no:3,base:0,name:0},
{no:4,base:0,name:0},
{no:5,base:0,name:0},
{no:6,base:0,name:0},
{no:7,base:0,name:0},
{no:8,base:0,name:0},
{no:9,base:0,name:0},
{no:10,base:0,name:0},
{no:11,base:0,name:0},
{no:12,base:0,name:0},
{no:13,base:0,name:0},
{no:14,base:0,name:0},
{no:15,base:0,name:0},
{no:16,base:0,name:0},
{no:17,base:0,name:0},
{no:18,base:0,name:0},
{no:19,base:0,name:0},
{no:20,base:0,name:0},
{no:21,base:0,name:0},
{no:22,base:0,name:0},
{no:23,base:0,name:0},
{no:24,base:0,name:0},
{no:25,base:0,name:0},
{no:26,base:0,name:0},
{no:27,base:0,name:0},
{no:28,base:0,name:0},
{no:29,base:0,name:0},
{no:30,base:0,name:0},
{no:31,base:0,name:0},
{no:32,base:0,name:0},
{no:33,base:0,name:0},
{no:34,base:0,name:0},
{no:35,base:0,name:0},
{no:36,base:0,name:0},
{no:37,base:0,name:0},
{no:38,base:0,name:0},
{no:39,base:0,name:0},
]
const ri = [
  {no:0,base:0,name:0},
  {no:1,base:0,name:0},
  {no:2,base:0,name:0},
  {no:3,base:0,name:0},
  {no:4,base:0,name:0},
  {no:5,base:0,name:0},
  {no:6,base:0,name:0},
  {no:7,base:0,name:0},
  {no:8,base:0,name:0},
  {no:9,base:0,name:0},
  {no:10,base:0,name:0},
  {no:11,base:0,name:0},
  {no:12,base:0,name:0},
  {no:13,base:0,name:0},
  {no:14,base:0,name:0},
  {no:15,base:0,name:0},
  {no:16,base:0,name:0},
  {no:17,base:0,name:0},
  {no:18,base:0,name:0},
  {no:19,base:0,name:0},
  {no:20,base:0,name:0},
  {no:21,base:0,name:0},
  {no:22,base:0,name:0},
  {no:23,base:0,name:0},
  {no:24,base:0,name:0},
  {no:25,base:0,name:0},
  {no:26,base:0,name:0},
  {no:27,base:0,name:0},]
const wa = [
{no:0,base:0,name:0},
{no:1,base:0,name:0},
{no:2,base:0,name:0},
{no:3,base:0,name:0},
{no:4,base:0,name:0},
{no:5,base:0,name:0},
{no:6,base:0,name:0},
{no:7,base:0,name:0},
{no:8,base:0,name:0},
{no:9,base:0,name:0},
{no:10,base:0,name:0},
{no:11,base:0,name:0},
{no:12,base:0,name:0},
{no:13,base:0,name:0},
{no:14,base:0,name:0},
{no:15,base:0,name:0},
{no:16,base:0,name:0},
{no:17,base:0,name:0},
{no:18,base:0,name:0},
{no:19,base:0,name:0},
{no:20,base:0,name:0},
{no:21,base:0,name:0},
{no:22,base:0,name:0},
{no:23,base:0,name:0},
{no:24,base:0,name:0},
{no:25,base:0,name:0},
{no:26,base:0,name:0},
]
const sc = [
  {no:0,base:0,name:0},
{no:1,base:0,name:0},
{no:2,base:0,name:0},
{no:3,base:0,name:0},
{no:4,base:0,name:0},
{no:5,base:0,name:0},
{no:6,base:0,name:0},
{no:7,base:0,name:0},
{no:8,base:0,name:0},
{no:9,base:0,name:0},
{no:10,base:0,name:0},
{no:11,base:0,name:0},
{no:12,base:0,name:0},
{no:13,base:0,name:0},
{no:14,base:0,name:0},
{no:15,base:0,name:0},
{no:16,base:0,name:0},
{no:17,base:0,name:0},
{no:18,base:0,name:0},
{no:19,base:0,name:0},
{no:20,base:0,name:0},
{no:21,base:0,name:0},
{no:22,base:0,name:0},
{no:23,base:0,name:0},
{no:24,base:0,name:0},
{no:25,base:0,name:0},
{no:26,base:0,name:0},
{no:27,base:0,name:0},
{no:28,base:0,name:0},
{no:29,base:0,name:0},
{no:30,base:0,name:0},
{no:31,base:0,name:0},
{no:32,base:0,name:0},
{no:33,base:0,name:0},
{no:34,base:0,name:0},
{no:35,base:0,name:0},
{no:36,base:0,name:0},
{no:37,base:0,name:0},
{no:38,base:0,name:0},
{no:39,base:0,name:0},
{no:40,base:0,name:0},
]
function App() {

  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');

let theme = createTheme({
  palette:{
    type: prefersLightMode ? 'light':'dark',
  }  
  ,
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
  },
  floatButton:{
    flexGrow: 1
  }
})
theme.spacing(4)
  const [isRemeber,setRemember]=useState(false);
  const [ch,setCh]= useState(10);
  const [confirmReset,setCon]=useState(false)
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
  const [amuletDB,setAmulet] = useState(am)
  const [potionDB,setPotion] = useState(po)
  const [armorDB,setArmor] = useState(ar)
  const [bookDB,setBook] = useState(bo)
  const [ringDB,setRing]=useState(ri)
  const [wandDB,setWand]=useState(wa)
  const [scrollDB,setScroll]=useState(sc)
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
  setValue()
  function resetData(){
    setAmulet(am)
    setPotion(po)
    setArmor(ar)
    setBook(bo)
    setRing(ri)
    setWand(wa)
    setScroll(sc)
    setCon(false)
    removeCookie('bo')
    removeCookie('am')
    removeCookie('ar')
    removeCookie('sc')
    removeCookie('po')
    removeCookie('wa')
    removeCookie('ri')
  }
  useEffect(()=>{
    if(getCookie('ch')!==undefined)
      {setCh(getCookie('ch'))
      setRemember(true)}
    if(getCookie('am')!==undefined){
      setAmulet(getCookie('am'))
      setRemember(true)}
    if(getCookie('ar')!==undefined){
      setArmor(getCookie('ar'))
      setRemember(true)}
    if(getCookie('sc')!==undefined){
      setScroll(getCookie('sc'))
      setRemember(true)}
    if(getCookie('po')!==undefined){
      setPotion(getCookie('po'))
      setRemember(true)}
    if(getCookie('bo')!==undefined){
      setBook(getCookie('bo'))
      setRemember(true)}
    if(getCookie('ri')!==undefined){
      setRing(getCookie('ri'))
      setRemember(true)}
    if(getCookie('wa')!==undefined){
      setWand(getCookie('wa'))
      setRemember(true)}
      
  },[])
  const handlechChange = (event, newValue) => {
    setCh(newValue);
    setValue();
    if(isRemeber){
      setCookie('ch',newValue)
    }
  };
  const handleAmChange = (newValue) => {
    setAmulet(newValue);
    setValue();
    if(isRemeber){
      setCookie('am',newValue)
    }
  };
  const handleArChange = (newValue) => {
    setArmor(newValue);
    setValue();
    if(isRemeber){
      setCookie('ar',newValue)
    }
  };
  const handleScChange = (newValue) => {
    setScroll(newValue);
    setValue();
    if(isRemeber){
      setCookie('sc',newValue)
    }
  };
  const handlePoChange = (newValue) => {
    setPotion(newValue);
    setValue();
    if(isRemeber){
      setCookie('po',newValue)
    }
  };
  const handleBoChange = (newValue) => {
    setBook(newValue);
    setValue();
    if(isRemeber){
      setCookie('bo',newValue)
    }
  };
  const handleWaChange = (newValue) => {
    setWand(newValue);
    setValue();
    if(isRemeber){
      setCookie('wa',newValue)
    }
  };
  const handleRiChange = (newValue) => {
    setRing(newValue);
    setValue();
    if(isRemeber){
      setCookie('ri',newValue)
    }
  };
  const handleCookie = (event) => {
    setRemember(event.target.checked)
    if(event.target.cheked){
      setCookie('ch',ch)
      setCookie('am',amuletDB)
      setCookie('ar',armorDB)
      setCookie('sc',scrollDB)
      setCookie('po',potionDB)
      setCookie('wa',wandDB)
      setCookie('ri',wandDB)
    }
    else{
      removeCookie('ch')
      removeCookie('am')
      removeCookie('ar')
      removeCookie('sc')
      removeCookie('po')
      removeCookie('wa')
      removeCookie('ri')
    }
  };
  const classes = useStyles();
  const handleOpen=()=>{
    setCon(true)
  }
  const handleClose=()=>{
    setCon(false)
  }
  return(
    <BrowserRouter basename="/Nethack-ID-MEMO">
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
          <Slider value={Number(ch)} onChange={handlechChange} min={3} max={25} valueLabelDisplay="auto"/>
        </Grid>
        <Grid item xs={3}>
          <Tooltip title="Clear Data">
            <IconButton color="primary" aria-label="Clear Data" component="span" onClick={handleOpen} >
              <AiOutlineClear />
            </IconButton>
          </Tooltip>
          <Dialog
          open={confirmReset}
          onClose={handleClose}>
            <DialogTitle>{"Are you sure to clear data?"}</DialogTitle>
            <DialogActions>
              <IconButton color="primary" aria-label="Confirm clear Data" component="span" onClick={handleClose}><BiX/></IconButton>
              <IconButton color="primary" aria-label="Confirm clear Data" component="span" onClick={resetData}><BiCheck/></IconButton>
            </DialogActions>
          </Dialog>
          <Tooltip title="Save Cookie?">
          <Checkbox
          onChange={handleCookie}
          checked={isRemeber}
          icon={<BiCookie />}
          checkedIcon={<SvgIcon color="primary"><path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.938.005-.034.016-.134.017-.168a.998.998 0 0 0-1.254-1.006A3.002 3.002 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-2 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></SvgIcon>} name="cookieCheck" />
          </Tooltip>
        </Grid>
      </Grid>
      <Routes>
        <Route path="/Amulet" theme={theme} element={<Amulet amuletDB={amuletDB} setAmulet={handleAmChange}/>} />
        <Route path="/Armor" theme={theme} element={<Armor armorDB={armorDB} price={price} setArmor={handleArChange}/>} />
        <Route path="/Scroll" theme={theme} element={<Scroll scrollDB={scrollDB} price={price} setScroll={handleScChange}/>} />
        <Route path="/SpellBook" theme={theme} element={<SpellBook bookDB={bookDB} price={price} setBook={handleBoChange}/>} />
        <Route path="/Potion" theme={theme} element={<Potion potionDB={potionDB} price={price} setPotion={handlePoChange}/>} />
        <Route path="/Ring" theme={theme} element={<Ring ringDB={ringDB} price={price} setRing={handleRiChange}/>} />
        <Route path="/Wand" theme={theme} element={<Wand wandDB={wandDB} price={price} setWand={handleWaChange}/>} />  
      </Routes>
      </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
