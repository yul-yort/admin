import { ButtonProps } from "@mui/material/Button/Button";

export interface IConfirmBody {
  cancelColor?: ButtonProps["color"];
  confirmColor?: ButtonProps["color"];
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  title?: string;
  text?: string;
  className?: string;
}
