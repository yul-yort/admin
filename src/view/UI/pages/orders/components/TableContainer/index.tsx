import React, { VFC } from "react";
import { Paper, Typography } from "@mui/material";
import { TableContainer as MUITableContainer } from "@mui/material";
import Table from "@mui/material/Table";

import css from "./styles.module.scss";
import { IListProps } from "./types";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import { EmptyList } from "../EmptyList";

const TableContainer: VFC<IListProps> = ({
  list,
  localities,
  getLocalities,
  localitiesLoading,
  filterByAgency,
  filterByPhone,
}) => {
  return (
    <>
      <Typography align="right" className={css.title} color="text.secondary">
        Найдено {list.length} вариантов
      </Typography>

      <Paper>
        <MUITableContainer>
          <Table aria-label="order list" size="small">
            <TableHeader />

            <TableBody
              list={list}
              filterByAgency={filterByAgency}
              filterByPhone={filterByPhone}
              localities={localities}
              getLocalities={getLocalities}
              localitiesLoading={localitiesLoading}
            />
          </Table>
        </MUITableContainer>

        {!list.length && <EmptyList />}
      </Paper>
    </>
  );
};

export default TableContainer;
