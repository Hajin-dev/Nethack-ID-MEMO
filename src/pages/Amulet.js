import React  from 'react';
import MUIDataTable from "mui-datatables";
const columns = [
  { name: "ap",
    label: "Apperance",
    options: {
    filter: true,
    sort: true,
    }
  },
  { name: "name",
    label: "Amulet",
    options: {
    filter: true,
    sort: true,
  },
}
];

const amuletDB = [
  {no:1,ap: "circular", name: ""},
  {no:2, ap: "spherical", name: ""},
  {no:3, ap: "oval", name: "" },
  {no:4, ap: "triangular", name: ""},
  {no:5, ap: "pyramidal", name: ""},
  {no:6, ap: "square", name: ""},
  {no:7, ap: "concave", name: ""},
  {no:8, ap: "hexagonal", name: ""},
  {no:9, ap: "octagonal", name: ""},
];
const options = {
  responsive:'standard'
};
function Amulet() {
  return(
    <MUIDataTable
  title={"Amulet"}
  data={amuletDB}
  columns={columns}
  options={options}
/>
  )
}
export default Amulet;