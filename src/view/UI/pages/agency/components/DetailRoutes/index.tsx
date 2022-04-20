import { FC } from "react";
import { Paper } from "@mui/material";
import sharedCss from "../shared/styles.module.scss";
import { Routes } from "./Routes";
import { RoutesHeader } from "./RoutesHeader";

export const DetailRoutes: FC = () => {
  return (
    <Paper className={sharedCss.block} variant="outlined">
      <RoutesHeader/>
      <Routes />
    </Paper>
  );
};
