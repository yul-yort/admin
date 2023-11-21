import { VFC } from "react";
import { TextField } from "@mui/material";
import { IInput } from "../types";
import { getErrorText } from "../../../../../libs/utils";
import { regexEmail } from "src/constants/regex";

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
          value: regexEmail,
          message: "Неверный формат email",
        },
      })}
    />
  );
};

export default LoginInput;
