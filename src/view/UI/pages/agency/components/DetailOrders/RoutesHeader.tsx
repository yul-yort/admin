import { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import sharedCss from "../shared/styles.module.scss";
import { IRoutesHeader } from "./types";

export const RoutesHeader: FC<IRoutesHeader> = ({ handleCreateRouteClick }) => {
  return (
    <div className={sharedCss.header}>
      <Typography variant="h6">Поездки</Typography>
      <IconButton onClick={handleCreateRouteClick} aria-label="add route">
        <AddRoundedIcon />
      </IconButton>
    </div>
  );
};
