import { FC } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useFieldArray, useFormContext } from "react-hook-form";

import { getErrorText } from "src/libs/utils";
import css from "./styles.module.scss";
import { IAgencyCreateEditForm, ICreateOrEditAgencyFormFields } from "./types";

export const AgencyCreateEditForm: FC<IAgencyCreateEditForm> = ({
  onSave,
  onClose,
}) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting, isDirty },
  } = useFormContext<ICreateOrEditAgencyFormFields>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className={css.row}>
        <TextField
          id="name"
          label="Название"
          placeholder="Название"
          variant="outlined"
          size="small"
          fullWidth
          autoFocus
          error={!!getErrorText(errors, "agencyName")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "agencyName")}
          {...register("agencyName", {
            required: true,
          })}
        />
      </div>

      {fields.map((field, index) => {
        return (
          <div key={field.id} className={css.row}>
            <TextField
              id="phone"
              label="Телефон"
              placeholder="Телефон"
              variant="outlined"
              size="small"
              fullWidth
              error={!!getErrorText(errors, "phones", index)}
              disabled={isSubmitting}
              helperText={getErrorText(errors, "phones", index)}
              {...register(`phones.${index}.value`, {
                required: true,
              })}
            />

            <IconButton
              disabled={isSubmitting}
              aria-label="delete phone"
              color="error"
              size="small"
              onClick={() => {
                remove(index);
              }}
            >
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </div>
        );
      })}

      <div className={css.row}>
        <Button
          aria-label="add phone"
          disabled={isSubmitting}
          size="small"
          variant="text"
          startIcon={<AddIcon fontSize="small" />}
          onClick={() => append({ value: "" })}
        >
          Добавить телефон
        </Button>
      </div>

      <div className={css.row}>
        <TextField
          multiline
          rows={3}
          id="description"
          label="Описание"
          placeholder="Описание"
          variant="outlined"
          size="small"
          fullWidth
          error={!!getErrorText(errors, "description")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "description")}
          {...register("description")}
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
