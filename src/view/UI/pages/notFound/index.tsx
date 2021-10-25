import React, { FC } from "react";
import { Link as RouterLink } from "react-router5";
import { Link, Typography } from "@mui/material";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import css from "./styles.module.scss";

const LinkBehavior = React.forwardRef((props, ref) => {
  return <RouterLink {...props} ref={ref} routeName="dashboard" />;
});

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
      <Link component={LinkBehavior} className={css.link}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
