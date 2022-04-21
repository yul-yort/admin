import React, { FC, useState } from "react";
import {
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IInput, IStatePasswordInput } from "../types";
import { getErrorText } from "src/libs/utils";
import { TextField } from "@mui/material";


const PasswordInput: FC<IInput> = ({ isSubmitting, errors, register }) => {
  const [values, setValues] = useState<IStatePasswordInput>({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
            id="password"
            label="Password"
            placeholder="Password"
            variant="outlined"
            fullWidth
            type={values.showPassword ? "text" : "password"}
            error={!!getErrorText(errors, "password")}
            disabled={isSubmitting}
            helperText={getErrorText(errors, "password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password", {
              required: true,
            })}
          />
  );
};

export default PasswordInput;
