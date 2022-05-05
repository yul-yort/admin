import { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import sharedCss from "../shared/styles.module.scss";
import { IRoutesHeader } from "./types";

export const RoutesHeader: FC<IRoutesHeader> = ({ handleShowModal }) => {
  return (
    <div className={sharedCss.header}>
      <Typography variant="h6">Маршруты</Typography>
      <IconButton onClick={handleShowModal} aria-label="add">
        <AddRoundedIcon />
      </IconButton>
    </div>
  );
};