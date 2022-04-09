import React, { FC, useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller} from "react-hook-form";
import { IPasswordInput, IStatePasswordInput } from "../types";

const PasswordInput: FC<IPasswordInput> = ({control, errorPassword}) => {
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
    <>
    <Controller
        name={"password"}
        control={control}
        rules={{ required: true, minLength: 6 }}
        render={({ field: { onChange, value = '' } }) => (
          <FormControl fullWidth variant="outlined">
        <InputLabel error={Boolean(errorPassword)} htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          error={Boolean(errorPassword)}
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          endAdornment={
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
          }
          label="Password"
        />
      </FormControl>
        )}
      />
    </>
  );
};

export default PasswordInput;
