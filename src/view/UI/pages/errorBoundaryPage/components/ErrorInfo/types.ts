import { ErrorInfo } from "react";

export interface IErrorInfo {
  handleExpand: () => void;
  error: Error | null;
  errorInfo: ErrorInfo;
  expanded: boolean;
}
