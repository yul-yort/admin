import React, { VFC } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import TableHeader from "../TableHeader";
import TableToolbar from "../TableToolbar";
import TableBodyTemplate from "../TableBody";
import { ITable } from "./types";
import css from "./styles.module.scss";

const AgencyTable: VFC<ITable> = ({ agencies }) => {
  return (
    <Paper className={css.wrapper}>
      <TableToolbar />

      <TableContainer>
        <Table aria-labelledby="tableTitle" size="small">
          <TableHeader rowCount={agencies.length} />

          <TableBodyTemplate rows={agencies} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AgencyTable;
