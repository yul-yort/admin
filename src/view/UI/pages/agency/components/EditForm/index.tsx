import { FC } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import { FormErrorsDictionary } from "src/constants/FormErrorsDictionary";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import css from "./styles.module.scss";
import { IFormData } from "../shared/types";

export const EditForm: FC<IFormData> = ({
  isSubmitting,
  errors,
  register,
  fields,
  remove,
  append,
}) => {
  return (
    <form>
      <div className={css.row}>
        <TextField
          id="name"
          label="Название"
          placeholder="Название"
          variant="outlined"
          size="small"
          fullWidth
          error={!!errors.agencyName}
          disabled={isSubmitting}
          helperText={
            errors?.agencyName?.type &&
            FormErrorsDictionary[errors.agencyName.type]
          }
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
              error={errors.phones && !!errors.phones[index].value}
              disabled={isSubmitting}
              {...register(`phones.${index}.value`, {
                required: true,
              })}
            />

            <IconButton
              disabled={isSubmitting}
              aria-label="delete"
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
          error={!!errors.description}
          disabled={isSubmitting}
          helperText={
            errors?.description?.type &&
            FormErrorsDictionary[errors.description.type]
          }
          {...register("description")}
        />
      </div>
    </form>
  );
};
