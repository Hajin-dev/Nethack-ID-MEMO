import _ from 'lodash'

import React, {forwardRef } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Edit from '@material-ui/icons/Edit';
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
function Ring(props) {
  const ringInfo={
    0: "",
    1: "adornment",
    2: "protection",
    3: "stealth",
    4: "sustain ability",
    5: "hunger",
    6: "warning",
    7: "protection from shape changers",
    8: "gain strength",
    9: "gain constitution",
    10: "increase accuracy",
    11: "increase damage",
    12: "aggravate monster",
    13: "poison resistance",
    14: "cold resistance",
    15: "shock resistance",
    16: "invisibility",
    17: "see invisible",
    18: "regeneration",
    19: "searching",
    20: "levitation",
    21: "fire resistance",
    22: "free action",
    23: "slow digestion",
    24: "teleportation",
    25: "conflict",
    26: "teleport control",
    27: "polymorph",
    28: "polymorph control",
  }
  function setAvailable(x){
    if (0===Number(x)) return(ringInfo)
    if (1===Number(x)) return(_.pick(ringInfo,_.range(1,8)))
    if (2===Number(x)) return(_.pick(ringInfo,_.range(8,18)))
    if (3===Number(x)) return(_.pick(ringInfo,_.range(18,25)))
    if (4===Number(x)) return(_.pick(ringInfo,_.range(25,29)))
    if (5===Number(x)) return(_.pick(ringInfo,_.range(8,25)))
  }
  const baseSet = {
    0 : "",
    1 : 100,
    2 : 150,
    3 : 200,
    4 : 300,
    5 : "150 or 200"}
  const sellSet = {}
  const buySet = {}
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      sellSet[key]=""}
    else if (key==="5"){
      sellSet[key]="75?"
    }
    else{
      sellSet[key]=props.price.find(x=>Number(x.value)===Number(value)).s1+"("+props.price.find(x=>Number(x.value)===Number(value)).s2+")"}})
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      buySet[key]=""}
    else if (key==="5"){
      buySet[key]=props.price.find(x=>Number(x.value)===200).b1+"?"
    }
    else{
      buySet[key]=props.price.find(x=>Number(x.value)===Number(value)).b1+"("+props.price.find(x=>Number(x.value)===Number(value)).b2+")"}})
  const columns = [
    { field: "name",title: "Ring", canEdit: "always",
      validate: rowData=>{
        for (let x of props.ringDB){
          if ((x.no !== rowData.no)&&(x.name === rowData.name)&&(rowData.name!==0)) return 'overlapped!'
        }
        return ''},
        editComponent:({value,onChange,rowData})=>{
          const ringList =  _.toPairs(setAvailable(rowData.base))
          return (<FormControl>
            <Select
            value={value}
            onChange={(event)=>{
              onChange(event.target.value);
            }}>
              {
              ringList.map((x)=>(
                <MenuItem key={x[0]} value={x[0]}>
                  {x[1]}
                </MenuItem>
              ))
            }
            </Select>
            
          </FormControl>)},
        lookup: ringInfo
    },
    /*{ field:"base",title:"Base Price", editable:'always',
      lookup: baseSet
    },*/
    { field:"base",title:"Sell Price", editable:'always',
      lookup: sellSet},
    { field:"base",title:"Buy Price", editable:'always',
      lookup: buySet},
    { field: "ap",title: "Apperance", editable:'never'
    }
  ];
  return (
    <MaterialTable
    title="Ring"
    columns={columns}
    data={props.ringDB}
    icons={tableIcons}
    editable={{
      onRowUpdate: (newData, oldData) =>{
        return new Promise((resolve, reject) =>{
          setTimeout(() => {
            const dataUpdate = [...props.ringDB];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            if(Number(newData.name)!==0){
              if(Number(newData.name)<8) dataUpdate[index].base=1
              else if(Number(newData.name)<18) dataUpdate[index].base=2
              else if(Number(newData.name)<25) dataUpdate[index].base=3
              else if(Number(newData.name)<29) dataUpdate[index].base=4    
              }
            props.setRing([...dataUpdate]);
            resolve();
          }, 500)})},
      onRowDelete: rowData=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          const resetRow=[...props.ringDB];
          const index = rowData.tableData.id;
          resetRow[index].base=0
          resetRow[index].name=0
          props.setRing([...resetRow])
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
          deletText:"Reset?"
        }
      }
    }}
    />
  )
}
export default Ring;