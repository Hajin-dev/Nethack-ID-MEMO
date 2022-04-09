import React from 'react';
import MaterialTable from 'material-table'
function Amulet(props) {
  const columns = [
    { field: "ap",
      title: "Apperance"
    },
    { field: "name",
      title: "Amulet"
    }
  ];
  const amuletDB = [
    {no:1, ap: "circular", name: ""},
    {no:2, ap: "spherical", name: ""},
    {no:3, ap: "oval", name: "" },
    {no:4, ap: "triangular", name: ""},
    {no:5, ap: "pyramidal", name: ""},
    {no:6, ap: "square", name: ""},
    {no:7, ap: "concave", name: ""},
    {no:8, ap: "hexagonal", name: ""},
    {no:9, ap: "octagonal", name: ""},
  ];
  return(
    <MaterialTable
    title="Amulet"
    columns={columns}
    data={amuletDB}
    />
  )
}
export default Amulet;