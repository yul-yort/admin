import { FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { format } from "date-fns";

import { ITableBodyTemplateProps } from "./types";
import css from "./styles.module.scss";
import { Phones } from "../../../../components/shared/Phones";

const TableBodyTemplate: FC<ITableBodyTemplateProps> = ({
  rows,
  selected,
  handleSelect,
}) => {
  const isSelected = (id: ID) => selected.indexOf(id) !== -1;

  return (
    <TableBody>
      {rows.slice().map((row, index: number) => {
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={(event) => handleSelect(event, row.id)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.id}
            selected={isItemSelected}
            className={css.row}
          >
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={isItemSelected}
                inputProps={{
                  "aria-labelledby": labelId,
                }}
              />
            </TableCell>
            <TableCell id={labelId}>{row.agencyName}</TableCell>
            <TableCell>{format(row.createDate, "MM.dd.yyyy HH:mm")}</TableCell>
            <TableCell>
              <div className={css.phones}>
                <Phones phones={row.phones} />
              </div>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyTemplate;
