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
/*{0: "",
  1:50,
  2:50,
  3:50,
  4:50,
  5:100,
  6:100,
  7:100,
  8:100,
  9:100,
  10:100,
  11:150,
  12:150,
  13:150,
  14:150,
  15:150,
  16:200,
  17:200,
  18:200,
  19:200,
  20:200,
  21:250,
  22:250,
  23:300,
  24:300,
  25:300};*/
function Potion(props) {
  const potionInfo =  {
    0:"",
    1:"booze",
    2:"fruit juice",
    3:"see invisible",
    4:"sickness",
    5:"confusion",
    6:"extra healing",
    7:"hallucination",
    8:"healing",
    9:"restore ability",
    10:"sleeping",
    11:"blindness",
    12:"gain energy",
    13:"invisibility",
    14:"monster detection",
    15:"object detection",
    16:"enlightenment",
    17:"full healing",
    18:"levitation",
    19:"polymorph",
    20:"speed",
    21:"acid",
    22:"oil",
    23:"gain ability",
    24:"gain level",
    25:"paralysis"}
  function setAvailable(x){
    if (0===Number(x)) return(potionInfo)
    if (1===Number(x)) return(_.pick(potionInfo,_.range(1,5)))
    if (2===Number(x)) return(_.pick(potionInfo,_.range(5,11)))
    if (3===Number(x)) return(_.pick(potionInfo,_.range(11,16)))
    if (4===Number(x)) return(_.pick(potionInfo,_.range(16,21)))
    if (5===Number(x)) return(_.pick(potionInfo,_.range(22,24)))
    if (6===Number(x)) return(_.pick(potionInfo,_.range(24,26)))
    if (7===Number(x)) return(_.pick(potionInfo,_.range(11,21)))
  }
  const baseSet = {
    0 : "",
    1 : 50,
    2 : 100,
    3 : 150,
    4 : 200,
    5 : 250,
    6 : 300,
    7 : "150 or 200"}
  const sellSet = {}
  const buySet = {}
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      sellSet[key]=""}
    else if (key==="7"){
      sellSet[key]="75?"
    }
    else{
      sellSet[key]=props.price.find(x=>Number(x.value)===Number(value)).s1+"("+props.price.find(x=>Number(x.value)===Number(value)).s2+")"}})
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      buySet[key]=""}
    else if (key==="7"){
      buySet[key]=props.price.find(x=>Number(x.value)===200).b1+"?"
    }
    else{
      buySet[key]=props.price.find(x=>Number(x.value)===Number(value)).b1+"("+props.price.find(x=>Number(x.value)===Number(value)).b2+")"}})
  const columns = [
    { field: "name",title: "Potion", canEdit: "always",
      validate: rowData=>{
        for (let x of props.potionDB){
          if ((x.no !== rowData.no)&&(x.name === rowData.name)&&(rowData.name!==0)) return 'overlapped!'
        }
        return ''},
        editComponent:({value,onChange,rowData})=>{
          const potionList =  _.toPairs(setAvailable(rowData.base))
          return (<FormControl>
            <Select
            value={value}
            onChange={(event)=>{
              onChange(event.target.value);
            }}>
              {
              potionList.map((x)=>(
                <MenuItem key={x[0]} value={x[0]}>
                  {x[1]}
                </MenuItem>
              ))
            }
            </Select>
            
          </FormControl>)},
        lookup: potionInfo
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
    title="Potion"
    columns={columns}
    data={props.potionDB}
    icons={tableIcons}
    editable={{
      onRowUpdate: (newData, oldData) =>{
        return new Promise((resolve, reject) =>{
          setTimeout(() => {
            const dataUpdate = [...props.potionDB];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            if(Number(newData.name)!==0){
              if(Number(newData.name)<5) dataUpdate[index].base=1
              else if(Number(newData.name)<11) dataUpdate[index].base=2
              else if(Number(newData.name)<16) dataUpdate[index].base=3
              else if(Number(newData.name)<21) dataUpdate[index].base=4
              else if(Number(newData.name)<24) dataUpdate[index].base=5    
              else if(Number(newData.name)<26) dataUpdate[index].base=6       
              }
            props.setPotion([...dataUpdate]);
            resolve();
          }, 500)})},
      onRowDelete: rowData=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          const resetRow=[...props.potionDB];
          const index = rowData.tableData.id;
          resetRow[index].base=0
          resetRow[index].name=0
          props.setPotion([...resetRow])
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
export default Potion;