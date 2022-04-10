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

function Wand(props) {
  const wandInfo={
    0:"",
    1: "light",
    2: "nothing",
    3: "secret door detection",
    4: "enlightenment",
    5: "striking",
    6: "make invisible",
    7: "slow monster",
    8: "speed monster",
    9: "undead turning",
    10: "opening",
    11: "locking",
    12: "probing",
    13: "digging",
    14: "magic missile",
    15: "fire",
    16: "cold",
    17: "sleep",
    18: "lightning",
    19: "create monster",
    20: "polymorph",
    21: "cancellation",
    22: "teleportation",
    23: "wishing",
    24: "death",
  }
  function setAvailable(x){
    if (0===Number(x)) return(wandInfo)
    if (1===Number(x)) return(_.pick(wandInfo,_.range(1,3)))
    if (2===Number(x)) return(_.pick(wandInfo,_.range(3,15)))
    if (3===Number(x)) return(_.pick(wandInfo,_.range(15,19)))
    if (4===Number(x)) return(_.pick(wandInfo,_.range(19,23)))
    if (5===Number(x)) return(_.pick(wandInfo,_.range(23,25)))
    if (6===Number(x)) return(_.assign(_.pick(wandInfo,_.range(3,15)),_.pick(wandInfo,_.range(19,23))))
  }
  const baseSet = {
    0 : "",
    1 : 100,
    2 : 150,
    3 : 175,
    4 : 200,
    5 : 500,
    6 : "150 or 200"}
    const sellSet = {}
  const buySet = {}
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      sellSet[key]=""}
    else if (key==="6"){
      sellSet[key]="75?"
    }
    else{
      sellSet[key]=props.price.find(x=>Number(x.value)===Number(value)).s1+"("+props.price.find(x=>Number(x.value)===Number(value)).s2+")"}})
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      buySet[key]=""}
    else if (key==="6"){
      buySet[key]=props.price.find(x=>Number(x.value)===200).b1+"?"
    }
    else{
      buySet[key]=props.price.find(x=>Number(x.value)===Number(value)).b1+"("+props.price.find(x=>Number(x.value)===Number(value)).b2+")"}})
  const columns = [
    { field: "name",title: "Wand", canEdit: "always",
      validate: rowData=>{
        for (let x of props.wandDB){
          if ((x.no !== rowData.no)&&(x.name === rowData.name)&&(rowData.name!==0)) return 'overlapped!'
        }
        return ''},
        editComponent:({value,onChange,rowData})=>{
          const wandList =  _.toPairs(setAvailable(rowData.base))
          return (<FormControl>
            <Select
            value={value}
            onChange={(event)=>{
              onChange(event.target.value);
            }}>
              {
              wandList.map((x)=>(
                <MenuItem key={x[0]} value={x[0]}>
                  {x[1]}
                </MenuItem>
              ))
            }
            </Select>
            
          </FormControl>)},
        lookup: wandInfo
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
    title="Wand"
    columns={columns}
    data={props.wandDB}
    icons={tableIcons}
    editable={{
      onRowUpdate: (newData, oldData) =>{
        return new Promise((resolve, reject) =>{
          setTimeout(() => {
            const dataUpdate = [...props.wandDB];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            if(Number(newData.name)!==0){
              if(Number(newData.name)<3) dataUpdate[index].base=1
              else if(Number(newData.name)<15) dataUpdate[index].base=2
              else if(Number(newData.name)<19) dataUpdate[index].base=3
              else if(Number(newData.name)<23) dataUpdate[index].base=4
              else if(Number(newData.name)<25) dataUpdate[index].base=5    
              }
            props.setWand([...dataUpdate]);
            resolve();
          }, 500)})},
      onRowDelete: rowData=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          const resetRow=[...props.wandDB];
          const index = rowData.tableData.id;
          resetRow[index].base=0
          resetRow[index].name=0
          props.setWand([...resetRow])
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

export default Wand