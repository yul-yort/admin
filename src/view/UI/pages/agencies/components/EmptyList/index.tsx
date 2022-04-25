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
        Список агенств пока пуст, но вы можете добавить новое агенство сами!
      </Typography>

      <Button
        variant="contained"
        className={css.button}
        onClick={onAddAgency}
        startIcon={<AddRoundedIcon />}
      >
        Добавить
      </Button>
    </Paper>
  );
};
