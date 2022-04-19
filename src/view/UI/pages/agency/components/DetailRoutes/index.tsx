import { FC } from "react";
import { IconButton, Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import sharedCss from "../shared/styles.module.scss";

function createData(
  name: string,
  calories: string,
  fat: number,
  carbs: number,
  protein: any,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Сибай', 'Уфа',1000, 24, 4.0),
  createData('Баймак', 'Магнитогорск', 1200, 37, 4.3),
  createData('Учалы', 'Уфа', 1300, 24, 6.0),
  createData('Бирск', 'Уфа', 900, 67, 4.3),
  createData('Красноусольск', 'Стерлитамак', 950, 49, 3.9),
];

export const DetailRoutes: FC = () => {
  const test = () => {
    console.log('super')
  }
  return (
    <Paper className={sharedCss.block} variant="outlined">
      <div className={sharedCss.header}>
        <Typography variant="h6">Маршруты</Typography>
        <IconButton onClick={test} aria-label="add">
          <AddRoundedIcon />
        </IconButton>
      </div>

      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ОТКУДА</TableCell>
            <TableCell align="right">КУДА</TableCell>
            <TableCell align="right">ЦЕНА</TableCell>
            <TableCell align="right">ДАТЫ</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
};
