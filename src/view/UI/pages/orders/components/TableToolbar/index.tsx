import React, { ChangeEventHandler, VFC } from "react";
import { Paper, TextField } from "@mui/material";

import css from "./styles.module.scss";
import Autocomplete from "@mui/material/Autocomplete";
import { ITableToolbar } from "./types";

const TableToolbar: VFC<ITableToolbar> = ({
  localities,
  getLocalities,
  localitiesLoading,
  filterByAgency,
  filterByPhone,
}) => {
  const handleOpen = async () => {
    await getLocalities();
  };

  const handleFilterByAgency: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    filterByAgency(event.target.value);
  };

  const handleFilterByPhone: ChangeEventHandler<HTMLInputElement> = (event) => {
    filterByPhone(event.target.value);
  };

  const autocompleteProps = {
    onOpen: handleOpen,
    loading: localitiesLoading,
    options: localities,
    noOptionsText: "Не найдено",
    loadingText: "Загрузка...",
    clearOnEscape: true,
    className: css.inputWrapper,
  };

  return (
    <Paper className={css.toolbarWrapper}>
      <Autocomplete
        {...autocompleteProps}
        id="origin"
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        )}
        renderInput={(params) => {
          return (
            <TextField {...params} placeholder="Откуда" variant="standard" />
          );
        }}
      />
      <Autocomplete
        {...autocompleteProps}
        id="destination"
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} placeholder="Куда" variant="standard" />
        )}
      />
      <TextField
        className={css.inputWrapper}
        onChange={handleFilterByAgency}
        id="agencyName"
        placeholder="Агенство"
        variant="standard"
        size="small"
        type="search"
      />
      <TextField
        className={css.inputWrapper}
        onChange={handleFilterByPhone}
        id="phone"
        placeholder="Телефон"
        variant="standard"
        size="small"
        type="search"
      />
    </Paper>
  );
};

export default TableToolbar;
