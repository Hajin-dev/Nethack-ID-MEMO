import React,{useState}from 'react';
import{ BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
//import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Navi from "./navi/Navi";

import Amulet from "./pages/Amulet"
import Armor from "./pages/Armor"
import Scroll from "./pages/Scroll"
import SpellBook from "./pages/SpellBook"
import Potion from "./pages/Potion"
import Ring from "./pages/Ring"
import Wand from "./pages/Wand"


function App() {
  /*const [ch,setCh]= useState(10);
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
  setValue()<Navi ch={ch} setCh={setCh} setValue={setValue}/>
  */
  return(
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/Amulet" element={<Amulet/>} />
        <Route path="/Armor" element={<Armor/>} />
        <Route path="/Scroll" element={<Scroll/>} />
        <Route path="/SpellBook" element={<SpellBook/>} />
        <Route path="/Potion" element={<Potion/>} />
        <Route path="/Ring" element={<Ring/>} />
        <Route path="/Wand" element={<Wand/>} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App;
