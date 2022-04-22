import { FC, useState } from "react";
import { Paper } from "@mui/material";
import sharedCss from "../shared/styles.module.scss";
import { Routes } from "./Routes";
import { RoutesHeader } from "./RoutesHeader";
import { RoutesCreateModal } from "./RoutesCreateModal";

export const DetailRoutes: FC = () => {
  const [stateModal, setStateModal] = useState(false);

  const changeStateModal = () => {
    setStateModal(true);
  };

  const handleCancelCloseEditModal = () => {
    setStateModal(false);
  };

  const handleSaveEdit = () => {
    console.log("super");
  };
  return (
    <Paper className={sharedCss.block} variant="outlined">
      <RoutesHeader changeStateModal={changeStateModal} />
      <Routes />
      <RoutesCreateModal
        stateModal={stateModal}
        handleCancelCloseEditModal={handleCancelCloseEditModal}
        handleSaveEdit={handleSaveEdit}
      />
    </Paper>
  );
};
