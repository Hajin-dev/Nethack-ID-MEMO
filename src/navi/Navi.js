import React from 'react';
import { Link as RouterLink , useNavigate  } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {GiPotionBall, GiFeatherNecklace, GiLayeredArmor, GiSpellBook, GiDiamondRing} from 'react-icons/gi'
import {ImMagicWand} from 'react-icons/im'

export default function Navi() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`);
    setValue(newValue);
  };
  return (
  <BottomNavigation
    value={value}
    onChange={handleChange}
    showLabels
  >
    <BottomNavigationAction componet={RouterLink} to="/Potion" value = "Potion"label="Potion" icon={<GiPotionBall />} />
    <BottomNavigationAction componet={RouterLink} to="/Amulet" value="Amulet" label="Amulet" icon={<GiFeatherNecklace />} />
    <BottomNavigationAction componet={RouterLink} to="/Armor" value="Armor" label="Armor" icon={<GiLayeredArmor />} />
    <BottomNavigationAction componet={RouterLink} to="/SpellBook" value="SpellBook" label="SpellBook" icon={<GiSpellBook />} />
    <BottomNavigationAction componet={RouterLink} to="/Ring" value="Ring" label="Ring" icon={<GiDiamondRing />} />
    <BottomNavigationAction componet={RouterLink} to="/Wand" value="Ring" label="Wand" icon={<ImMagicWand />} />
  </BottomNavigation>
  );
}