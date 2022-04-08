import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useRoute } from "react-router5";
import { Button, CircularProgress } from "@mui/material";

import { useViewModel } from "../../hooks/useViewModel";
import { IUserVM } from "../../../viewModels/User/types";
import css from "./styles.module.scss";
import { useNotification } from "../../hooks/useNotification";

const LoginPage: FC = observer(() => {
  const user = useViewModel<IUserVM>("user");
  const { addNotification } = useNotification();

  const {
    route: { params },
    router: { navigate },
  } = useRoute();

  const { redirectName = "dashboard", redirectParams = {} } = params;

  const handleClick = async () => {
    try {
      await user.login();
      navigate(redirectName, redirectParams);
    } catch (err) {
      // @ts-ignore
      const message = `${err?.name} ${err?.message}`;
      addNotification({
        type: "error",
        message,
      });
      throw err;
    }
  };

  return (
    <div className={css.page}>
      <Button variant="outlined" onClick={handleClick}>
        {user.loading ? <CircularProgress size={25} /> : "Авторизоваться"}
      </Button>
    </div>
  );
});

export default LoginPage;
