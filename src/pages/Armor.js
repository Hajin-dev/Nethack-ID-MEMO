import _ from 'lodash'

import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { FormControl,MenuItem, Select } from '@material-ui/core';
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check fontSize="small" {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear fontSize="small" {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <KeyboardReturnIcon fontSize="small" {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit fontSize="small" {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
function Armor(props) {
  const armorInfo ={
      0: "",
      1: "helmet(kabuto)",
      2: "helm of brilliance",
      3: "helm of opposite alignment",
      4: "helm of telepathy",
      5: "cloak of protection",
      6: "cloak of invisibility",
      7: "cloak of magic resistance",
      8: "cloak of displacement",
      9: "leather gloves",
      10: "gauntlets of fumbling",
      11: "gauntlets of power",
      12: "gauntlets of dexterity",
      13: "speed boots",
      14: "water walking boots",
      15: "jumping boots",
      16: "elven boots",
      17: "kicking boots",
      18: "fumble boots",
      19: "levitation boots",
  }
  const baseSet = {
    0 : "",
    1 : 8,
    2 : 10,
    4 : 30,
    6 : 50,
    7 : 60}
  const sellSet = {}
  const buySet = {}
  function setAvailable(x){
    switch(Number(x.ar)){
      case 0:
        switch (Number(x.base)){
          case 2: return(_.pick(armorInfo,['1']))
          case 6: return(_.pick(armorInfo,['2','3','4']))
          default: return(_.pick(armorInfo,_.range(1,5)))
        }
      case 1:
        switch (Number(x.base)){
          case 6: return(_.pick(armorInfo,['5','6']))
          case 7: return(_.pick(armorInfo,['7','8']))
          default: return(_.pick(armorInfo,_.range(5,9)))
        }
      case 2:
        switch (Number(x.base)){
          case 1: return(_.pick(armorInfo,['9']))
          case 7: return(_.pick(armorInfo,['10','11','12']))
          default: return(_.pick(armorInfo,_.range(9,13)))
        }
      case 3:
        switch (Number(x.base)){
          case 1: return(_.pick(armorInfo,['16','17']))
          case 4: return(_.pick(armorInfo,['18','19']))
          case 6: return(_.pick(armorInfo,['13','14','15']))
          default: return(_.pick(armorInfo,_.range(13,20)))
        }
      default:
        return _.pick(armorInfo,['0'])
    }
  }
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      sellSet[key]=""}
    else{
      sellSet[key]=props.price.find(x=>Number(x.value)===Number(value)).s1+"("+props.price.find(x=>Number(x.value)===Number(value)).s2+")"}})
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      buySet[key]=""}
    else{
      buySet[key]=props.price.find(x=>Number(x.value)===Number(value)).b1+"("+props.price.find(x=>Number(x.value)===Number(value)).b2+")"}})
  const columns = [
    { field: "name",title: "Armor", canEdit: "always",
    validate: rowData=>{
      for (let x of props.armorDB){
        if ((x.ap !== rowData.ap)&&(x.name === rowData.name)&&(rowData.name!==0)) return 'overlapped!'
      }
      return ''
    },
        editComponent:({value,onChange,rowData})=>{
          const armorList =  _.toPairs(setAvailable(rowData))
          //const formerror = true
          return (<FormControl>
            <Select
            value={value}
            onChange={(event)=>{
              onChange(event.target.value);
            }}>
              {
              armorList.map((x)=>(
                <MenuItem key={x[0]} value={x[0]}>
                  {x[1]}
                </MenuItem>
              ))
            }
            </Select>
            
          </FormControl>)},
        lookup: armorInfo
    },
    /*{ field:"base",title:"Base Price", editable:'always',
      lookup: baseSet
    },*/
    { field:"base",title:"Sell Price", editable:'always',
      lookup: sellSet},
    { field:"base",title:"Buy Price", editable:'always',
      lookup: buySet},
    { field: "ap",title: "Apperance", editable:'never',
    lookup:{
      0:"etched helmet",
      1:"crested helmet",
      2:"visored helmet",
      3:"plumed helmet",
      4:"tattered cape",
      5:"ornamental cope",
      6:"opera cloak",
      7:"piece of cloth",
      8:"old gloves",
      9:"padded gloves",
      10:"riding gloves",
      11:"fencing gloves",
      12:"mud boots",
      13:"snow boots",
      14:"riding boots",
      15:"buckled boots",
      16:"hiking boots",
      17:"combat boots",
      18:"jungle boots"
    }
    }
  ];
  return (
    <MaterialTable
    title="Armor"
    columns={columns}
    data={props.armorDB}
    icons={tableIcons}
    editable={{
      onRowUpdate: (newData, oldData) =>{
        function setBase(x,name){
          return !(_.isUndefined(x.find(x=>x===Number(name))))
        }
        return new Promise((resolve, reject) =>{
          setTimeout(() => {
            const dataUpdate = [...props.armorDB];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            if(Number(newData.name)!==0){
              if(setBase([9,16,17],newData.name)) dataUpdate[index].base=1
              else if(setBase([1],newData.name)) dataUpdate[index].base=2
              else if(setBase([18,19],newData.name)) dataUpdate[index].base=4
              else if(setBase([2,3,4,5,6],newData.name)) dataUpdate[index].base=6
              else if(setBase([7,8,10,11,12],newData.name)) dataUpdate[index].base=7    
              }
            props.setArmor([...dataUpdate]);
            resolve();
          }, 500)})},
      onRowDelete: rowData=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          const resetRow=[...props.armorDB];
          const index = rowData.tableData.id;
          resetRow[index].base=0
          resetRow[index].name=0
          props.setArmor([...resetRow])
          resolve();
        },500)
      })
    }
        }}
        options={{
          paging:false
        }}
    localization={{
      body:{
        deleteTooltip:"Reset",
        editRow:{
          deleteText:"Reset this row?"
        }
      }
    }}
    />
  )
}
export default Armor;