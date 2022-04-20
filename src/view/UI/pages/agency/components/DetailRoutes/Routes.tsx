import { FC } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import css from "./styles.module.scss";
import { createData } from "./types";

//TODO: сделать получение из mocks
const rows = [
  createData("1", "Сибай", "Уфа", 1000),
  createData("2", "Баймак", "Магнитогорск", 1200),
  createData("3", "Учалы", "Уфа", 1300),
  createData("4", "Бирск", "Уфа", 900),
  createData("5", "Красноусольск", "Стерлитамак", 950),
];

export const Routes: FC = () => {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ОТКУДА</TableCell>
            <TableCell>КУДА</TableCell>
            <TableCell>ЦЕНА</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id} className={css.tableRow}>
              <TableCell>{row.origin}</TableCell>
              <TableCell>{row.destination}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>
                <div className={css.icons}>
                  <IconButton>
                    <EditRoundedIcon fontSize="small" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

//TODO: ЗАДАЧИ
//1) Реализовать функционал удаления + редактирования (Добавить данные rows в agencies)
//3) Придумать и реализовать, как показывать информацию вывода даты и времени
