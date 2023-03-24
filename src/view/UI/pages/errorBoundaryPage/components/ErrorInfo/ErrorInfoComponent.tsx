import { VFC } from "react";
import { Collapse, IconButton, Typography } from "@mui/material";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router5";

import { CONSTANTS } from "src/common/globalConstants";

import css from "./styles.module.scss";
import { IErrorInfo } from "./types";

export const ErrorInfoComponent: VFC<IErrorInfo> = ({
  handleExpand,
  errorInfo,
  error,
  expanded,
}) => {
  return (
    <div className={css.errorBoundary}>
      <Typography align="center" className={css.icon} color="error.main">
        <SentimentVeryDissatisfiedOutlinedIcon fontSize="inherit" />
      </Typography>

      <Typography variant="h6" align="center" color="error.main">
        Произошла ошибка при работе с приложением
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="error.main"
        onClick={handleExpand}
        className={css.collapseTitle}
      >
        {error && error.toString()}
        <IconButton aria-label="expand">
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Typography>

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className={css.collapse}
      >
        <Typography align="center">{error && error.toString()}</Typography>

        <br />

        <Typography align="center">{errorInfo.componentStack}</Typography>
      </Collapse>

      <Link routeName={CONSTANTS.defaultRoute}>Перейти на главную</Link>
    </div>
  );
};
