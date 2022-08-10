import { ChangeEventHandler, HTMLAttributes, VFC } from "react";
import { Paper, TextField } from "@mui/material";

import css from "./styles.module.scss";
import Autocomplete from "@mui/material/Autocomplete";
import { ITableToolbar } from "./types";
import { ILocalityEntity } from "../../../../../../data/Locality/entity/types";

const TableToolbar: VFC<ITableToolbar> = ({
  localities,
  getLocalities,
  localitiesLoading,
  filterByAgency,
  filterByPhone,
  filterByOrigin,
  filterByDestination,
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

  const handleFilterByOrigin = (id: ID) => {
    filterByOrigin(id);
  };

  const handleFilterByDestination = (id: ID) => {
    filterByDestination(id);
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

  const renderOption = (
    props: HTMLAttributes<HTMLLIElement>,
    option: ILocalityEntity
  ) => (
    <li {...props} key={option.id}>
      {option.name}
    </li>
  );

  return (
    <Paper className={css.toolbarWrapper}>
      <Autocomplete
        {...autocompleteProps}
        id="origin"
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        renderOption={renderOption}
        onChange={(_, value) => {
          handleFilterByOrigin(value ? value.id : "");
        }}
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
        renderOption={renderOption}
        onChange={(_, value) => {
          handleFilterByDestination(value ? value.id : "");
        }}
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
