import { FC } from "react";
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { IAgenciesData, ITableBodyTemplateProps, TOrderAgencies } from "./types";

const TableBodyTemplate: FC<ITableBodyTemplateProps> = ({rows, order, orderBy, selected, handleClick}) => {

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  function getComparator<Key extends keyof any>(
    order: TOrderAgencies,
    orderBy: Key,
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
  ) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  return (
    <TableBody>
      {rows.slice().sort(getComparator(order, orderBy))
        .map((row: IAgenciesData, index: number) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name}
              selected={isItemSelected}>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </TableCell>
              <TableCell
                component="th"
                id={labelId}
                scope="row"
                padding="none">{row.name}</TableCell>
              <TableCell align="right">{row.dateСreation}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyTemplate;
