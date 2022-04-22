import React, { FC, useState } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "../TableHeader";
import TableToolbar from "../TableToolbar";
import TableBodyTemplate from "../TableBody";
import { ITable } from "./types";

const AgencyTable: FC<ITable> = ({ agencies }) => {
  const [selected, setSelected] = useState<ID[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const selectedAgencies = agencies.map((n) => n.id);
      setSelected(selectedAgencies);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (event: React.MouseEvent<unknown>, id: ID) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <Paper sx={{ width: "100%", mb: 2, overflow: "hidden" }}>
      <TableToolbar selected={selected} />
      <TableContainer>
        <Table aria-labelledby="tableTitle" size="small">
          <TableHeader
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={agencies.length}
          />
          <TableBodyTemplate
            rows={agencies}
            selected={selected}
            handleSelect={handleSelect}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AgencyTable;
