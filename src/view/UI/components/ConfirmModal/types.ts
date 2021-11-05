export interface IConfirmModal {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;
  text?: string;  
}
