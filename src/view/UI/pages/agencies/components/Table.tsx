import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Название', width: 130 },
  { field: 'dateСreation', headerName: 'Дата создания', width: 130 },
  {
    field: 'rating',
    headerName: 'Рейтинг',
    type: 'number',
    width: 90,
  },
  {
    field: 'phone',
    headerName: 'Телефон',
    type: 'number',
    width: 90,
  },
  
];

const rows = [
  { id: 1, Name: 'Йыхан', dateСreation: '21.11.1020', rating: '8', phone: '89295797782' },
  
];

const AgencyListTable: FC = observer (() => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  
  )
});

export default AgencyListTable;