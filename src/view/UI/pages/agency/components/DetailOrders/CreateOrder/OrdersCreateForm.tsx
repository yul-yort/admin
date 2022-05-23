import { FC } from "react";
import { TextField, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IOrdersCreateForm, IOrdersCreateFormFields } from "./types";
import { getErrorText } from "src/libs/utils";
import { CONSTANTS } from "src/constants/globalConstants";
import css from "./styles.module.scss";
import Autocomplete from "@mui/material/Autocomplete";

const pointsData = [
  {
    id: "1",
    name: "Уфа",
  },
  {
    id: "2",
    name: "Сибай",
  },
  {
    id: "3",
    name: "Акъяр",
  },
  {
    id: "4",
    name: "Ишембай",
  },
];

//TODO нужно сделать обязательное поле "Выбор валюты". (https://trello.com/c/wXEG7n0j)
export const OrdersCreateForm: FC<IOrdersCreateForm> = ({
  onSave,
  onClose,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty },
  } = useFormContext<IOrdersCreateFormFields>();

  const noOptionsText: string = "Не найдено";

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className={css.row}>
        <Autocomplete
          size="small"
          fullWidth
          disablePortal
          id="origin"
          options={pointsData}
          getOptionLabel={(option) => {
            return option.name;
          }}
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          noOptionsText={noOptionsText}
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("origin", {
                required: true,
              })}
              error={!!getErrorText(errors, "origin")}
              helperText={getErrorText(errors, "origin")}
              label="Откуда"
              placeholder="Откуда"
            />
          )}
        />
      </div>

      <div className={css.row}>
        <Autocomplete
          size="small"
          fullWidth
          disablePortal
          id="destination"
          options={pointsData}
          getOptionLabel={(option) => {
            return option.name;
          }}
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          noOptionsText={noOptionsText}
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("destination", {
                required: true,
              })}
              error={!!getErrorText(errors, "destination")}
              helperText={getErrorText(errors, "destination")}
              label="Куда"
              placeholder="Куда"
            />
          )}
        />
      </div>

      <div className={css.row}>
        <TextField
          id="price"
          label="Цена"
          placeholder="Цена"
          variant="outlined"
          size="small"
          fullWidth
          error={!!getErrorText(errors, "price")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "price")}
          {...register("price", {
            required: true,
            pattern: {
              value: CONSTANTS.numberPattern,
              message: "Введите числовое значение без пробелов",
            },
          })}
        />
      </div>

      <div className={css.footerWrapper}>
        <Button disabled={isSubmitting} onClick={onClose} aria-label="cancel">
          Отмена
        </Button>
        <Button
          disabled={isSubmitting || !isDirty}
          type="submit"
          aria-label="save"
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};
