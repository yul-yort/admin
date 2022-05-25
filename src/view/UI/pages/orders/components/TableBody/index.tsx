import React, { VFC } from "react";
import TableRow from "@mui/material/TableRow";
import { TableBody as MUITableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router5";
import { Typography } from "@mui/material";

import { IOrdersList } from "./types";
import { getCurrency } from "src/libs/utils";
import { Phones } from "../../../../components/shared/Phones";
import css from "./styles.module.scss";
import TableToolbar from "../TableToolbar";

const TableBody: VFC<IOrdersList> = ({
  list,
  getLocalities,
  localities,
  localitiesLoading,
  filterByAgency,
  filterByPhone,
}) => {
  return (
    <MUITableBody>
      <TableToolbar
        localities={localities}
        filterByAgency={filterByAgency}
        filterByPhone={filterByPhone}
        getLocalities={getLocalities}
        localitiesLoading={localitiesLoading}
      />

      {list.map(({ id, route, agency, price, currencyISO }) => {
        return (
          <TableRow key={id} tabIndex={-1}>
            <TableCell>{route.origin.name}</TableCell>
            <TableCell>{route.destination.name}</TableCell>
            <TableCell className={css.price_cell}>
              {price} {getCurrency(currencyISO)}
            </TableCell>
            <TableCell>
              <Link routeName="agencies.agency" routeParams={{ id: agency.id }}>
                <Typography variant="subtitle2" align="left">
                  {agency.agencyName}
                </Typography>
              </Link>
            </TableCell>
            <TableCell>
              <div className={css.phones}>
                <Phones phones={agency.phones} />
              </div>
            </TableCell>
          </TableRow>
        );
      })}
    </MUITableBody>
  );
};

export default TableBody;
