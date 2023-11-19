import { VFC } from "react";
import { TextField } from "@mui/material";
import { IInput } from "../types";
import { getErrorText } from "../../../../../libs/utils";

const LoginInput: VFC<IInput> = ({ disabled, errors, register }) => {
  return (
    <TextField
      id="email"
      label="Email"
      placeholder="Email"
      variant="outlined"
      autoComplete="on"
      fullWidth
      error={!!getErrorText(errors, "email")}
      disabled={disabled}
      helperText={getErrorText(errors, "email")}
      {...register("email", {
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "Неверный формат email",
        },
      })}
    />
  );
};

export default LoginInput;
