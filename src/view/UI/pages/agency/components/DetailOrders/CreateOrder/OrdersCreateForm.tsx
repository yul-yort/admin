import { FC, useEffect, useState } from "react";
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
  {
    id: "20",
    name: "Сибай 1",
  },
  {
    id: "30",
    name: "Акъяр 2",
  },
  {
    id: "40",
    name: "Ишембай 3",
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
    clearErrors,
    formState: { errors, isSubmitting, isDirty },
  } = useFormContext<IOrdersCreateFormFields>();

  const noOptionsText: string = "Не найдено";
  const [originID, setOriginID] = useState("");
  const [destinationID, setDestinationID] = useState("");

  useEffect(() => {
    originID && clearErrors("origin");
    destinationID && clearErrors("destination");
  }, [originID, destinationID]);

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className={css.row}>
        <Autocomplete
          size="small"
          fullWidth
          id="origin"
          options={pointsData}
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )}
          noOptionsText={noOptionsText}
          onChange={(_, newValue) => {
            const originID = newValue?.id || "";
            setOriginID(originID);
          }}
          renderInput={(params) => (
            <TextField
              autoFocus
              {...params}
              {...register("origin", {
                required: true,
                value: originID,
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
          id="destination"
          options={pointsData}
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )}
          noOptionsText={noOptionsText}
          onChange={(_, newValue) => {
            const destinationID = newValue?.id || "";
            setDestinationID(destinationID);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("destination", {
                required: true,
                value: destinationID,
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
