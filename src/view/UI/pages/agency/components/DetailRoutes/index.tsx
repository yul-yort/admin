import { FC } from "react";
import { IconButton, Paper, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import sharedCss from "../shared/styles.module.scss";

export const DetailRoutes: FC = () => {
  return (
    <Paper className={sharedCss.block} variant="outlined">
      <div className={sharedCss.header}>
        <Typography variant="h6">Маршруты</Typography>
        <IconButton aria-label="add">
          <AddRoundedIcon />
        </IconButton>
      </div>
    </Paper>
  );
};
