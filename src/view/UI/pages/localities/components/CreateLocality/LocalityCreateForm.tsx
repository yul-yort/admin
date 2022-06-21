import { FC } from "react";
import { Button, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { getErrorText } from "src/libs/utils";
import { ICreateLocalityForm, ILocalityFormFields } from "./types";
import css from "./styles.module.scss";

const LocalityCreateForm: FC<ICreateLocalityForm> = ({ onSave, onClose }) => {
  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors, isSubmitting, isDirty },
  } = useFormContext<ILocalityFormFields>();
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
          error={!!getErrorText(errors, "name")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "name")}
          {...register("name", {
            required: true,
          })}
        />
      </div>
      <div className={css.row}>
        <TextField
          id="district"
          label="Район"
          placeholder="Район"
          variant="outlined"
          size="small"
          fullWidth
          error={!!getErrorText(errors, "district")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "district")}
          {...register("district")}
        />
      </div>
      <div className={css.row}>
        <TextField
          id="region"
          label="Регион"
          placeholder="Регион"
          variant="outlined"
          size="small"
          fullWidth
          error={!!getErrorText(errors, "region")}
          disabled={isSubmitting}
          helperText={getErrorText(errors, "region")}
          {...register("region")}
        />
      </div>
      <div className={css.row}>
        <TextField
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

export default LocalityCreateForm;
