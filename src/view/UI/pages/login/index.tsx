import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { observer } from "mobx-react-lite";

import { useViewModel } from "../../hooks";
import { IFormValues } from "./types";
import css from "./styles.module.scss";

import LoginInput from "./components/LoginInput";
import PasswordInput from "./components/PasswordInput";
import FormButton from "./components/FormButton";

const LoginPage: FC = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>();
  const adminVM = useViewModel("admin");
  const authVm = useViewModel("auth");

  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    authVm.signIn(data);
  };

  return (
    <div className={css.page}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={css.page__form}
        autoComplete="on"
        name="yul-yort-login-form"
        id="yul-yort-login-form"
      >
        <div className={css.page__formItem}>
          <LoginInput
            disabled={isSubmitting}
            errors={errors}
            register={register}
          />
        </div>

        <div className={css.page__formItem}>
          <PasswordInput
            disabled={isSubmitting}
            errors={errors}
            register={register}
          />
        </div>

        <div className={css.page__formItem}>
          <FormButton loading={adminVM.loading} disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
});

export default LoginPage;
