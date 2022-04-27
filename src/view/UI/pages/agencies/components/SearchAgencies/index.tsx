import { ChangeEventHandler, FC } from "react";
import { TextField } from "@mui/material";
import { ISearchAgency } from "./types";

export const SearchAgencies: FC<ISearchAgency> = ({ searchAgency }) => {
  const handleSearch: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    searchAgency(e.target.value);
  };

  return (
    <TextField
      id="search-agency"
      label="Поиск"
      placeholder="Название или телефон"
      variant="standard"
      size="small"
      type="search"
      onChange={handleSearch}
    />
  );
};
