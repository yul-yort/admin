import { ChangeEventHandler } from "react";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";

import css from "./styles.module.scss";

const LocalitiesHeader = () => {
  const handleSearch: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = () => {
    console.log("event");
  };
  return (
    <div className={css.header}>
      <TextField
        id="search-agency"
        label="Поиск"
        placeholder="Название или телефон"
        variant="standard"
        size="small"
        type="search"
        onChange={handleSearch}
      />

      <Tooltip title="Добавить location">
        <IconButton aria-label="add agency">
          <AddIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default LocalitiesHeader;
