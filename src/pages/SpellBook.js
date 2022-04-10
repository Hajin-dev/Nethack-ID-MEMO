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
function SpellBook(props){
  const bookInfo={
    0: "",
    1: "Lv.1 sleep",
    2: "Lv.1 light",
    3: "Lv.1 detect monsters",
    4: "Lv.1 healing",
    5: "Lv.1 knock",
    6: "Lv.1 force bolt",
    7: "Lv.1 protection",
    8: "Lv.1 jumping",
    9: "Lv.2 magic missile",
    10: "Lv.2 confuse monster",
    11: "Lv.2 cure blindness",
    12: "Lv.2 drain life",
    13: "Lv.2 slow monster",
    14: "Lv.2 wizard lock",
    15: "Lv.2 create monster",
    16: "Lv.2 detect food",
    17: "Lv.2 cause fear",
    18: "Lv.3 clairvoyance",
    19: "Lv.3 cure sickness",
    20: "Lv.3 charm monster",
    21: "Lv.3 haste self",
    22: "Lv.3 detect unseen",
    23: "Lv.3 extra healing",
    24: "Lv.3 remove curse",
    25: "Lv.3 identify",
    26: "Lv.3 stone to flesh",
    27: "Lv.4 fireball",
    28: "Lv.4 cone of cold",
    29: "Lv.4 levitation",
    30: "Lv.4 restore ability",
    31: "Lv.4 invisibility",
    32: "Lv.4 detect treasure",
    33: "Lv.5 dig",
    34: "Lv.5 magic mapping",
    35: "Lv.6 turn undead",
    36: "Lv.6 polymorph",
    37: "Lv.6 teleport away",
    38: "Lv.6 create familiar",
    39: "Lv.7 finger of death",
    40: "Lv.7 cancellation",
  }
  function setAvailable(x){
    if (0===Number(x)) return(bookInfo)
    if (1===Number(x)) return(_.pick(bookInfo,_.range(1,9)))
    if (2===Number(x)) return(_.pick(bookInfo,_.range(9,17)))
    if (3===Number(x)) return(_.pick(bookInfo,_.range(17,27)))
    if (4===Number(x)) return(_.pick(bookInfo,_.range(27,33)))
    if (5===Number(x)) return(_.pick(bookInfo,_.range(33,35)))
    if (6===Number(x)) return(_.pick(bookInfo,_.range(35,39)))
    if (7===Number(x)) return(_.pick(bookInfo,_.range(39,41)))
    if (8===Number(x)) return(_.pick(bookInfo,_.range(17,33)))
  }
  const baseSet = {
    0:"",
    1:100,
    2:200,
    3:300,
    4:400,
    5:500,
    6:600,
    7:700,
    8:"300 or 400"
  }
  const sellSet = {}
  const buySet = {}
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      sellSet[key]=""}
    else if (key==="8"){
      sellSet[key]="150?"}
    else{
      sellSet[key]=props.price.find(x=>Number(x.value)===Number(value)).s1+"("+props.price.find(x=>Number(x.value)===Number(value)).s2+")"}})
  Object.entries(baseSet).forEach(([key,value],i,a)=>{
    if (key==="0"){
      buySet[key]=""}
    else if (key==="8"){
      buySet[key]=props.price.find(x=>Number(x.value)===400).b1+"?"
    }
    else{
      buySet[key]=props.price.find(x=>Number(x.value)===Number(value)).b1+"("+props.price.find(x=>Number(x.value)===Number(value)).b2+")"}})
  const columns = [
    { field: "name",title: "SpellBook", canEdit: "always",
      validate: rowData=>{
        for (let x of props.bookDB){
          if ((x.no !== rowData.no)&&(x.name === rowData.name)&&(rowData.name!==0)) return 'overlapped!'
        }
        return ''},
        editComponent:({value,onChange,rowData})=>{
          const bookList =  _.toPairs(setAvailable(rowData.base))
          return (<FormControl>
            <Select
            value={value}
            onChange={(event)=>{
              onChange(event.target.value);
            }}>
              {
              bookList.map((x)=>(
                <MenuItem key={x[0]} value={x[0]}>
                  {x[1]}
                </MenuItem>
              ))
            }
            </Select>
            
          </FormControl>)},
        lookup: bookInfo
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
      title="SpellBook"
      columns={columns}
      data={props.bookDB}
      icons={tableIcons}
      editable={{
        onRowUpdate: (newData, oldData) =>{
          return new Promise((resolve, reject) =>{
            setTimeout(() => {
              const dataUpdate = [...props.bookDB];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              if(Number(newData.name)!==0){
                if(Number(newData.name)<9) dataUpdate[index].base=1
                else if(Number(newData.name)<17) dataUpdate[index].base=2
                else if(Number(newData.name)<27) dataUpdate[index].base=3
                else if(Number(newData.name)<33) dataUpdate[index].base=4
                else if(Number(newData.name)<35) dataUpdate[index].base=5    
                else if(Number(newData.name)<39) dataUpdate[index].base=6
                else if(Number(newData.name)<41) dataUpdate[index].base=7     
                }
              props.setBook([...dataUpdate]);
              resolve();
            }, 500)})},
        onRowDelete: rowData=>{
        return new Promise((resolve, reject)=>{
          setTimeout(()=>{
            const resetRow=[...props.bookDB];
            const index = rowData.tableData.id;
            resetRow[index].base=0
            resetRow[index].name=0
            props.setbookDB([...resetRow])
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
export default SpellBook;