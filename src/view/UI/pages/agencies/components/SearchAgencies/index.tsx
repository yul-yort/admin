import { FC, useEffect } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { ISearchAgency } from "./types";

export const SearchAgencies: FC<ISearchAgency> = ({searchAgency}) => {
  const { register, watch } = useForm();
  const watchAllFields = watch();

  useEffect(() => {
    const value = watchAllFields["search-agency"];
    searchAgency(value);
  }, [watchAllFields, searchAgency]);

  return (
    <TextField
      id="search-agency"
      label="Поиск"
      placeholder="Название или телефон"
      variant="standard"
      size="small"
      {...register("search-agency", {
        required: true,
      })}
    />
  );
};
