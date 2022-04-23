import { VFC } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

import css from "./styles.module.scss";
import { SearchAgencies } from "../SearchAgencies";

const TableToolbar: VFC = () => {
  const addAgency = () => {
    console.log("add Agency");
  };

  return (
    <div className={css.wrapper}>
      <SearchAgencies />
      <Tooltip title="Добавить агенство">
        <IconButton onClick={addAgency}>
          <AddIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TableToolbar;
