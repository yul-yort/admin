import { FC } from "react";
import { TextField, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IRoutesCreateForm } from "./types";
import { getErrorText } from "src/libs/utils";
import { CONSTANTS } from "src/constants/globalConstants";

export const RoutesCreateForm: FC<IRoutesCreateForm> = ({
  onSave,
  onClose,
}) => {
  //FIXME: нужно указать типы
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty },
  } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div>
        <TextField
          id="origin"
          label="Откуда"
          placeholder="Откуда"
          variant="outlined"
          size="small"
          fullWidth
          error={!!getErrorText(errors, "origin")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "origin")}
          {...register("origin", {
            required: true,
          })}
        />
      </div>
      <div>
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

      <div>
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
              message: 'Введите числовое значение без пробелов',
          },
          })}
        />
      </div>

      <div>
        <Button disabled={isSubmitting} onClick={onClose}>
          Отмена
        </Button>
        <Button disabled={isSubmitting || !isDirty} type="submit">
          Сохранить
        </Button>
      </div>
    </form>
  );
};
