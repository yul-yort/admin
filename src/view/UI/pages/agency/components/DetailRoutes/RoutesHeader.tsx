import { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import sharedCss from "../shared/styles.module.scss";
import { IRoutesHeader } from "./types";

export const RoutesHeader: FC<IRoutesHeader> = ({ changeStateModal }) => {
  return (
    <div className={sharedCss.header}>
      <Typography variant="h6">Маршруты</Typography>
      <IconButton onClick={() => changeStateModal()} aria-label="add">
        <AddRoundedIcon />
      </IconButton>
    </div>
  );
};
