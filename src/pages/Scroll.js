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
function Scroll(props) {
  const scrollInfo={
  0: "",
  1: "identify",
  2: "light",
  3: "enchant weapon",
  4: "enchant armor",
  5: "remove curse",
  6: "destroy armor",
  7: "confuse monster",
  8: "scare monster",
  9: "teleportation",
  10: "gold detection",
  11: "food detection",
  12: "magic mapping",
  13: "fire",
  14: "create monster",
  15: "taming",
  16: "amnesia",
  17: "earth",
  18: "genocide",
  19: "punishment",
  20: "charging",
  21: "stinking cloud",}
  const baseSet = {
    0 : "",
    1 : 20,
    2 : 50,
    3 : 60,
    4 : 80,
    5 : 100,
    6 : 200,
    7 : 300,
    8 : "60 or 80"}
  const sellSet = {}
  const buySet = {}
  function setAvailable(x){
    if (0===Number(x)) return(scrollInfo)
    if (1===Number(x)) return(_.pick(scrollInfo,_.range(1,2)))
    if (2===Number(x)) return(_.pick(scrollInfo,_.range(2,3)))
    if (3===Number(x)) return(_.pick(scrollInfo,_.range(3,4)))
    if (4===Number(x)) return(_.pick(scrollInfo,_.range(4,6)))
    if (5===Number(x)) return(_.pick(scrollInfo,_.range(6,14)))
    if (6===Number(x)) return(_.pick(scrollInfo,_.range(14,18)))
    if (7===Number(x)) return(_.pick(scrollInfo,_.range(18,22)))
    if (8===Number(x)) return(_.pick(scrollInfo,_.range(3,6)))
  }
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      sellSet[key]=""}
    else if (key==="8"){
      sellSet[key]="30?"
    }
    else{
      sellSet[key]=props.price.find(x=>Number(x.value)===Number(value)).s1+"("+props.price.find(x=>Number(x.value)===Number(value)).s2+")"}})
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      buySet[key]=""}
    else if (key==="8"){
      buySet[key]=props.price.find(x=>Number(x.value)===80).b1+"?"
    }
    else{
      buySet[key]=props.price.find(x=>Number(x.value)===Number(value)).b1+"("+props.price.find(x=>Number(x.value)===Number(value)).b2+")"}})
  const columns = [
    { field: "name",title: "Scroll", canEdit: "always",
      validate: rowData=>{
        for (let x of props.scrollDB){
          if ((x.no !== rowData.no)&&(x.name === rowData.name)&&(rowData.name!==0)) return 'overlapped!'
        }
        return ''},
        editComponent:({value,onChange,rowData})=>{
          const scrollList =  _.toPairs(setAvailable(rowData.base))
          return (<FormControl>
            <Select
            value={value}
            onChange={(event)=>{
              onChange(event.target.value);
            }}>
              {
              scrollList.map((x)=>(
                <MenuItem key={x[0]} value={x[0]}>
                  {x[1]}
                </MenuItem>
              ))
            }
            </Select>
            
          </FormControl>)},
        lookup: scrollInfo
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
    title="Scroll"
    columns={columns}
    data={props.scrollDB}
    icons={tableIcons}
    editable={{
      onRowUpdate: (newData, oldData) =>{
        return new Promise((resolve, reject) =>{
          setTimeout(() => {
            const dataUpdate = [...props.scrollDB];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            if(Number(newData.name)!==0){
              if(Number(newData.name)<2) dataUpdate[index].base=1
              else if(Number(newData.name)<3) dataUpdate[index].base=2
              else if(Number(newData.name)<4) dataUpdate[index].base=3
              else if(Number(newData.name)<6) dataUpdate[index].base=4
              else if(Number(newData.name)<14) dataUpdate[index].base=5    
              else if(Number(newData.name)<18) dataUpdate[index].base=6
              else if(Number(newData.name)<22) dataUpdate[index].base=7        
              }
            props.setScroll([...dataUpdate]);
            resolve();
          }, 500)})},
      onRowDelete: rowData=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          const resetRow=[...props.scrollDB];
          const index = rowData.tableData.id;
          resetRow[index].base=0
          resetRow[index].name=0
          props.setScroll([...resetRow])
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
export default Scroll;