import { FC } from "react";
import { Link as RouterLink } from "react-router5";
import { Typography } from "@mui/material";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import css from "./styles.module.scss";

const NotFound: FC = () => {
  return (
    <div className={css.page}>
      <Typography align="center" variant="h1">
        404
      </Typography>
      <Typography align="center" className={css.icon}>
        <SentimentDissatisfiedOutlinedIcon fontSize="inherit" />
      </Typography>
      <Typography align="center" variant="h5">
        Страница не найдена
      </Typography>
      <RouterLink routeName="dashboard" className={css.link}>
        Вернуться на главную
      </RouterLink>
    </div>
  );
};

export default NotFound;
