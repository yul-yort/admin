import { ReactNode } from "react";
import { IConfirmBody } from "../ConfirmBody/types";

export interface IModal {
  open: boolean;
  onClose: () => void;
  title: string;
  dividers?: boolean;
  footer?: ReactNode;
  showConfirm?: boolean;
  confirmProps?: IConfirmBody;
}
