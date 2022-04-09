import React, { FC, useState } from "react";
import { TextField } from "@mui/material";
import { Controller} from "react-hook-form";
import { ILoginInput } from "../types";

const LoginInput: FC<ILoginInput> = ({control, errorLogin}) => {
  return (
    <>
      <Controller
        name={"login"}
        control={control}
        rules={{ required: true, minLength: 6 }}
        render={({ field: { onChange, value = '' } }) => (
          <TextField
          error={Boolean(errorLogin)}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            onChange={onChange}
            value={value}
            label={"Login"}
            
          />
        )}
      />
    </>
  );
};

export default LoginInput;
