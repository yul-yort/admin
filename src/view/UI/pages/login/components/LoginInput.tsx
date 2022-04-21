import React, { FC, useState } from "react";
import { TextField } from "@mui/material";
import { IInput } from "../types";
import { getErrorText } from "../../../../../libs/utils";

const LoginInput: FC<IInput> = ({ isSubmitting, errors, register }) => {
  return (
    <TextField
      id="login"
      label="Login"
      placeholder="Login"
      variant="outlined"
      fullWidth
      error={!!getErrorText(errors, "login")}
      disabled={isSubmitting}
      helperText={getErrorText(errors, "login")}
      {...register("login", {
        required: true,
      })}
    />
  );
};

export default LoginInput;
