import { ErrorInfo, ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export interface IState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  expanded: boolean;
  offline: boolean;
  timerID: NodeJS.Timeout | null;
}
