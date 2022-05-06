import { VFC } from "react";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import css from "./styles.module.scss";
import { IEmpty } from "./types";

export const EmptyList: VFC<IEmpty> = ({ onAddAgency }) => {
  return (
    <Paper className={css.wrapper}>
      <Typography className={css.title}>
        Агенства не найдены! Поменяйте параметры поиска или добавьте новое
        агенство.
      </Typography>

      <Button
        variant="contained"
        className={css.button}
        onClick={onAddAgency}
        startIcon={<AddRoundedIcon />}
        aria-label="add agency"
      >
        Добавить
      </Button>
    </Paper>
  );
};
