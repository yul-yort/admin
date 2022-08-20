import { ChangeEventHandler, FC } from "react";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";

import css from "./styles.module.scss";
import { IHeaderLocality } from "./types";

const LocalitiesHeader: FC<IHeaderLocality> = ({ handleShowCreateModal }) => {
  const handleSearch: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = () => {
    console.log("event");
  };

  return (
    <div className={css.header}>
      <TextField
        id="search-locality"
        label="Поиск"
        placeholder="Название или район"
        variant="standard"
        size="small"
        type="search"
        onChange={handleSearch}
      />

      <Tooltip title="Добавить location">
        <IconButton onClick={handleShowCreateModal}>
          <AddIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default LocalitiesHeader;
