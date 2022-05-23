import { FC, useState } from "react";
import { TextField, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useFormContext } from "react-hook-form";
import { IOrdersCreateForm, IOrdersCreateFormFields } from "./types";
import { getErrorText } from "src/libs/utils";
import { CONSTANTS } from "src/constants/globalConstants";
import css from "./styles.module.scss";

const pointsData = [
  {
    id: "1",
    name: "Уфа",
  },
  {
    id: "1",
    name: "Сибай",
  },
  {
    id: "1",
    name: "Акъяр",
  },
  {
    id: "1",
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

  const [value, setValue] = useState(null);
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className={css.row}>
        <Autocomplete
          value={value}
          size="small"
          fullWidth
          disablePortal
          id="combo-box-demo"
          options={pointsData}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            // if (option.inputValue) {
            //   return option.inputValue;
            // }
            // Regular option
            return option.name;
          }}
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>

      <div className={css.row}>
        <TextField
          id="destination"
          label="Куда"
          placeholder="Куда"
          variant="outlined"
          size="small"
          fullWidth
          error={!!getErrorText(errors, "destination")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "destination")}
          {...register("destination", {
            required: true,
          })}
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
