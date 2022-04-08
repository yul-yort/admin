import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useRoute } from "react-router5";
import { Button, CircularProgress } from "@mui/material";

import css from "./styles.module.scss";
import { useViewModel } from "../../hooks/useViewModel";
import { IUserVM } from "../../../viewModels/User/types";
import { CONSTANTS } from "../../../../constants/globalConstants";

const LoginPage: FC = observer(() => {
  const user = useViewModel<IUserVM>("user");

  const {
    route: { params },
    router: { navigate },
  } = useRoute();
  const { redirectName = CONSTANTS.defaultRoute, redirectParams = {} } = params;

  const handleClick = async () => {
    await user.login();
    navigate(redirectName, redirectParams);
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
