import { ReactNode } from "react";

export interface IModal {
  open: boolean;
  onClose: () => void;
  title: string;
  footer?: ReactNode;
}