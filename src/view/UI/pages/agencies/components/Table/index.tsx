import { FC, useState } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "../TableHeader";
import TableToolbar from "../TableToolbar";
import TableBodyTemplate from "../TableBody";
import { ITable } from "./types";

const AgencyTable: FC<ITable> = (props) => {
  const { listData } = props;
  const [selected, setSelected] = useState<readonly string[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = listData.map((n) => n.agencyName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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
    <Paper sx={{ width: "100%", mb: 2 }}>
      <TableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table aria-labelledby="tableTitle">
          <TableHeader
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={listData.length}
          />
          <TableBodyTemplate
            rows={listData}
            selected={selected}
            handleSelect={handleSelect}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AgencyTable;
