import { FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { ITableBodyTemplateProps } from "./types";
import { IAgencyResponseDTO } from "src/data/entities/Agency/types";
import css from "./styles.module.scss";
import { Phones } from "../../../../components/shared/Phones";

const TableBodyTemplate: FC<ITableBodyTemplateProps> = (props) => {
  const { rows, selected, handleSelect } = props;

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <TableBody>
      {rows.slice().map((row: IAgencyResponseDTO, index: number) => {
        const isItemSelected = isSelected(row.agencyName);
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
            <TableCell component="th" id={labelId} scope="row" padding="none">
              {row.agencyName}
            </TableCell>
            <TableCell align="right">{row.createDate}</TableCell>
            <TableCell align="right">
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
