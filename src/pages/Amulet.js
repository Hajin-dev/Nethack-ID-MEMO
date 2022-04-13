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
function Amulet(props) {
  const columns = [
    { field: "name",title: "Amulet",  canEdit: "always",
    validate: rowData=>{
      for (let x of props.amuletDB){
        if ((x.no !== rowData.no)&&(x.name === rowData.name)&&(rowData.name!==0)) return 'overlapped!'
      }
      return ''
    },
    lookup: {
      0:"",
      1:"change",
      2:"ESP",
      3:"life saving",
      4:"magical breathing",
      5:"reflection",
      6:"restful sleep",
      7:"strangulation",
      8:"unchanging",
      9:"versus poison"
      }
    },
    { field: "ap",title: "Apperance", editable:'never',
    lookup:{
      0:"circular",
      1:"spherical",
      2:"oval",
      3:"triangular",
      4:"pyramidal",
      5:"square",
      6:"concave",
      7:"hexagonal",
      8:"octagonal"
    }
    }
  ];

  return(
    <MaterialTable
    title="Amulet"
    columns={columns}
    data={props.amuletDB}
    icons={tableIcons}
    editable={{
      onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(props.amuletDB)
        const dataUpdate = [...props.amuletDB];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        props.setAmulet([...dataUpdate]);
        resolve();
      }, 500)
    }),onRowDelete: rowData=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          const resetRow=[...props.amuletDB];
          const index = rowData.tableData.id;
          resetRow[index].name=0
          props.setAmulet([...resetRow])
          resolve();
        },500)
      })
    }
    }}
    options={{
      paging:false
    }}

    />
  )
}
export default Amulet;