import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useViewModel } from "../../hooks/useViewModel";
import { IUserVM } from "../../../viewModels/User/types";
import { useRoute } from "react-router5";
import { observer } from "mobx-react-lite";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import { CONSTANTS } from "../../../../constants/globalConstants";
import { IFormValues, IStatePasswordInput, TInputs } from "./types";
import css from "./styles.module.scss";
import { getErrorText } from "src/libs/utils";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginInput from "./components/LoginInput";

const LoginPage: FC = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>();
  const user = useViewModel<IUserVM>("user");

  const {
    route: { params },
    router: { navigate },
  } = useRoute();
  const { redirectName = CONSTANTS.defaultRoute, redirectParams = {} } = params;

  const onSubmit: SubmitHandler<TInputs> = async (data: any) => {
    console.log(data);
    await user.login();
    // navigate(redirectName, redirectParams);
  };
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
    <div className={css.page}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.page__form}>
        <div className={css.page__formItem}>
          <LoginInput
            isSubmitting={isSubmitting}
            errors={errors}
            register={register}
          />
        </div>

        <div className={css.page__formItem}>
          {/*<PasswordInput control={control} errorPassword={errors.password} />*/}
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
        </div>

        <div className={css.page__formItem}>
          <Button
            type="submit"
            size="large"
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
          >
            {user.loading ? <CircularProgress size={25} /> : "ВОЙТИ"}
          </Button>
        </div>
      </form>
    </div>
  );
});

export default LoginPage;
