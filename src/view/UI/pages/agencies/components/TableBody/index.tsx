import { FC } from "react";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router5";
import { Typography } from "@mui/material";
import cn from "classnames";

import { ITableBodyTemplateProps } from "./types";
import css from "./styles.module.scss";
import { Phones } from "../../../../components/shared";

const TableBodyTemplate: FC<ITableBodyTemplateProps> = ({
  rows,
  isLoadingItem,
}) => {
  return (
    <TableBody>
      {rows.map(({ id, phones, name, createdAt }) => {
        const classes = cn({
          [css.row__loading]: isLoadingItem(id),
        });

        return (
          <TableRow key={id} tabIndex={-1} className={classes}>
            <TableCell>
              <Link routeName="agencies.agency" routeParams={{ id }}>
                <Typography variant="subtitle2" align="left">
                  {name}
                </Typography>
              </Link>
            </TableCell>

            <TableCell>{createdAt}</TableCell>

            <TableCell>
              <div className={css.phones_cell}>
                <div className={css.phones}>
                  <Phones phones={phones} />
                </div>
              </div>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyTemplate;
