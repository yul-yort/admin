import React, { ChangeEventHandler, VFC } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TextField } from "@mui/material";

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
    options: localitiesLoading ? [] : localities,
    noOptionsText: "Не найдено",
  };

  return (
    <TableRow>
      <TableCell>
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
          renderInput={(params) => (
            <TextField {...params} placeholder="Откуда" variant="standard" />
          )}
        />
      </TableCell>
      <TableCell>
        <Autocomplete
          {...autocompleteProps}
          id="destination"
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          clearOnEscape
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} placeholder="Куда" variant="standard" />
          )}
        />
      </TableCell>
      <TableCell />
      <TableCell>
        <TextField
          inputProps={{
            className: css.input,
          }}
          onChange={handleFilterByAgency}
          id="agencyName"
          placeholder="Агенство"
          variant="standard"
          size="small"
          type="search"
        />
      </TableCell>
      <TableCell>
        <TextField
          inputProps={{
            className: css.input,
          }}
          onChange={handleFilterByPhone}
          id="phone"
          placeholder="Телефон"
          variant="standard"
          size="small"
          type="search"
        />
      </TableCell>
    </TableRow>
  );
};

export default TableToolbar;
