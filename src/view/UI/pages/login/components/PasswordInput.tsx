import React, { VFC, useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IInput } from "../types";
import { getErrorText } from "src/libs/utils";
import { TextField } from "@mui/material";

//TODO шифрование или сериализация пароля?
const PasswordInput: VFC<IInput> = ({ disabled, errors, register }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
      autoComplete="on"
      fullWidth
      type={showPassword ? "text" : "password"}
      error={!!getErrorText(errors, "password")}
      disabled={disabled}
      helperText={getErrorText(errors, "password")}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              disabled={disabled}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
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
