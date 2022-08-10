import { VFC } from "react";
import { TextField } from "@mui/material";
import { IInput } from "../types";
import { getErrorText } from "../../../../../libs/utils";

const LoginInput: VFC<IInput> = ({ disabled, errors, register }) => {
  return (
    <TextField
      id="login"
      label="Login"
      placeholder="Login"
      variant="outlined"
      autoComplete="on"
      fullWidth
      error={!!getErrorText(errors, "login")}
      disabled={disabled}
      helperText={getErrorText(errors, "login")}
      {...register("login", {
        required: true,
      })}
    />
  );
};

export default LoginInput;
