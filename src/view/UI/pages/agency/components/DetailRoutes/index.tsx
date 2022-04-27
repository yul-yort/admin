import { FC, useState } from "react";
import { Paper } from "@mui/material";
import sharedCss from "../shared/styles.module.scss";
import { Routes } from "./Routes";
import { RoutesHeader } from "./RoutesHeader";
import { CreateRoutes } from "./CreateRoutes";

export const DetailRoutes: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Paper className={sharedCss.block} variant="outlined">
      <RoutesHeader handleShowModal={handleShowModal} />
      <Routes />
      <CreateRoutes showModal={showModal} handleCloseModal={handleCloseModal} />
    </Paper>
  );
};
