import { VFC } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

import css from "./styles.module.scss";
import { ITableToolbar } from "./types";

const TableToolbar: VFC<ITableToolbar> = ({ onAddAgency }) => (
  <div className={css.wrapper}>
    <TextField label="Поиск по названию" variant="standard" size="small" />

    <Tooltip title="Добавить агенство">
      <IconButton onClick={onAddAgency}>
        <AddIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  </div>
);

export default TableToolbar;
