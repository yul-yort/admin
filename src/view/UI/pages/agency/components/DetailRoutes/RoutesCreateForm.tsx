import { FC } from "react";
import { TextField } from "@mui/material";
import { useFormContext, SubmitHandler } from "react-hook-form";
import { FormErrorsDictionary } from "src/constants/FormErrorsDictionary";
import { IRoutesCreateForm } from "./types";

type FormValues = {
  name: string;
};

export const RoutesCreateForm: FC<IRoutesCreateForm> = ({ handleSaveEdit }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          id="name"
          label="Откуда"
          placeholder="Откуда"
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

      <button type="submit"></button>
    </form>
  );
};
