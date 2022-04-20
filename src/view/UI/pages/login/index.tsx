import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useViewModel } from "../../hooks/useViewModel";
import { IUserVM } from "../../../viewModels/User/types";
import { useRoute } from "react-router5";
import { observer } from "mobx-react-lite";
import { Button, CircularProgress } from "@mui/material";

import { CONSTANTS } from "../../../../constants/globalConstants";
import PasswordInput from "./components/PasswordInput";
import LoginInput from "./components/LoginInput";
import { TInputs } from "./types";

import css from "./styles.module.scss";
import { getErrorText } from "src/libs/utils";



const LoginPage: FC = observer(() => {
  const {register, handleSubmit, control, formState: { errors, isValid } } = useForm();
  const user = useViewModel<IUserVM>("user");

  const {
    route: { params },
    router: { navigate },
  } = useRoute();
  const { redirectName = CONSTANTS.defaultRoute, redirectParams = {} } = params;


  const onSubmit: SubmitHandler<TInputs> = async (data: any) => {
    console.log(data)
    await user.login();
    // navigate(redirectName, redirectParams);
  };
  
  return (
    <div className={css.page}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.page__form}>
        <div className={css.page__formItem}>
          <LoginInput control={control} errorLogin={errors.login}/>
          <span className={css.test}>
          {getErrorText(errors, 'login')}
          </span>
        </div>
        <div className={css.page__formItem}>
          <PasswordInput control={control}  errorPassword={errors.password}/>
          <span className={css.test}>
            {getErrorText(errors, 'password')}
          </span>
        </div>
        <div className={css.page__formItem}>
        <Button size="large" disabled={false}  fullWidth variant="outlined" onClick={handleSubmit(onSubmit)}>
          {user.loading ? <CircularProgress size={25} /> : "ВОЙТИ"}
        </Button>
        </div>
      </form>
    </div>
  );
});

export default LoginPage;
