import React, { ErrorInfo } from "react";
import { Typography } from "@mui/material";
import css from "./styles.module.scss";
import { IProps, IState } from "./types";
import { ErrorInfoComponent } from "./components/ErrorInfo/ErrorInfoComponent";
import cn from "classnames";

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      expanded: false,
      offline: !navigator.onLine,
      timerID: null,
    };
  }

  componentDidMount(): void {
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

  componentWillUnmount(): void {
    this.state.timerID && clearInterval(this.state.timerID);
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // TODO логирование ошибок (сервер или google analytics) + в InitError тоже
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }

  handleExpand = (): void => {
    this.setState({ expanded: !this.state.expanded });
  };

  render(): JSX.Element {
    return (
      <span
        className={cn(css.appWrapper, {
          [css.appWrapper__offline]: this.state.offline,
        })}
      >
        <Typography className={css.notConnectText}>
          Отсутствует интернет соединение
        </Typography>

        {this.state.errorInfo ? (
          <ErrorInfoComponent
            handleExpand={this.handleExpand}
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            expanded={this.state.expanded}
          />
        ) : (
          this.props.children
        )}
      </span>
    );
  }
}
