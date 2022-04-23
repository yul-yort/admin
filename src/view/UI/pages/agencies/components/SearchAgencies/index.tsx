import { FC, useEffect } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useViewModel } from "src/view/UI/hooks/useViewModel";
import { IAgencyVM } from "src/view/viewModels/Agency/types";

export const SearchAgencies: FC = () => {
  const agencyVM = useViewModel<IAgencyVM>("agency");
  const { register, watch } = useForm();
  const { searchAgency } = agencyVM;

  const watchAllFields = watch();

  useEffect(() => {
    const value = watchAllFields["search-agency"];
    value && getValue(value);
  }, [watchAllFields]);

  //TODO: Отправка не сразу а с задержкой
  const getValue = (value: string) => {
    searchAgency(value);
  };

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
