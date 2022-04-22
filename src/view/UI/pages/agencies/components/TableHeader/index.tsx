import { FC } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableHeaderCells } from "./config";

const TableHeader: FC = () => (
  <TableHead>
    <TableRow>
      {TableHeaderCells.map((headCell) => (
        <TableCell key={headCell.id}>{headCell.label}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default TableHeader;
