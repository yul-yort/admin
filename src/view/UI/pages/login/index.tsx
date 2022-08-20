import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRoute } from "react-router5";
import { observer } from "mobx-react-lite";

import { IUserVM } from "../../../viewModels/User/types";
import { useViewModel } from "../../hooks/useViewModel";
import { CONSTANTS } from "../../../../constants/globalConstants";
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
  const user = useViewModel<IUserVM>("user");

  const {
    route: { params },
    router: { navigate },
  } = useRoute();
  const { redirectName = CONSTANTS.defaultRoute, redirectParams = {} } = params;

  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    await user.login(data);
    // navigate(redirectName, redirectParams);
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
          <FormButton loading={user.loading} disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
});

export default LoginPage;
