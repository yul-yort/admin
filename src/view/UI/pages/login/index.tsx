import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";

const LoginPage: FC = observer(() => (
  <Button variant="contained">Авторизоваться</Button>
));

export default LoginPage;
