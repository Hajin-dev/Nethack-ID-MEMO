import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
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
function Potion(props) {
  const columns = [
    { field: "name",title: "Potion", canEdit: "always",
    validate: rowData=>{
      for (let x of props.potionDB){
        if ((x.no !== rowData.no)&&(x.name === rowData.name)&&(rowData.name!==0)) return 'overlapped!'
      }
      return ''},
    lookup: {
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
      25:"paralysis"
  }
    },
    { field:"name",title:"Base Price", editable:'never',
  lookup:{
    0: "",
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
    25:300
  }
  },
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
      onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(props.potionDB)
        const dataUpdate = [...props.potionDB];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        props.setPotion([...dataUpdate]);
        resolve();
      }, 500)
    })
    }}
    options={{
      paging:false
    }}

    />
  )
}
export default Potion;