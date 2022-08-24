import { VFC } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

import css from "./styles.module.scss";
import { SearchAgencies } from "../SearchAgencies";
import { ITableToolbar } from "./types";

const TableToolbar: VFC<ITableToolbar> = ({
  onAddAgency,
  searchAgency,
  searchValue,
}) => (
  <div className={css.wrapper}>
    <SearchAgencies searchAgency={searchAgency} searchValue={searchValue} />
    <Tooltip title="Добавить агенство">
      <IconButton onClick={onAddAgency} aria-label="add agency">
        <AddIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  </div>
);

export default TableToolbar;
