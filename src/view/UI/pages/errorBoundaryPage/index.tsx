import React, { ErrorInfo } from "react";
import { Collapse, IconButton, Typography } from "@mui/material";
import css from "./styles.module.scss";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import { IProps, IState } from "./types";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// TODO вынести компоненты
// TODO плашка находится за шапкой
export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      expanded: false,
      offline: !navigator.onLine,
      timerID: null,
    };
  }

  componentDidMount() {
    const timerID = setInterval(() => {
      if (!navigator.onLine !== this.state.offline) {
        this.setState({
          offline: !navigator.onLine,
        });
      }
    }, 10000);

    this.setState({
      timerID,
    });
  }

  componentWillUnmount() {
    this.state.timerID && clearInterval(this.state.timerID);
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // TODO логирование ошибок, автоматическая отправка данных об ошибке на сервер или на почту админов.
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    if (this.state.errorInfo) {
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
            onClick={this.handleExpand}
            className={css.collapseTitle}
          >
            {this.state.error && this.state.error.toString()}{" "}
            <IconButton>
              {this.state.expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Typography>

          <Collapse
            in={this.state.expanded}
            timeout="auto"
            unmountOnExit
            className={css.collapse}
          >
            <Typography align="center">
              {this.state.error && this.state.error.toString()}
            </Typography>

            <br />

            <Typography align="center">
              {this.state.errorInfo.componentStack}
            </Typography>
          </Collapse>
        </div>
      );
    }

    return (
      <span className={css.appWrapper}>
        {this.state.offline && (
          <Typography className={css.notConnectText}>
            Отсутствует интернет соединение
          </Typography>
        )}
        {this.props.children}
      </span>
    );
  }
}
