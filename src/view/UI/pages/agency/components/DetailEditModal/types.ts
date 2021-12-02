import { IFormData } from "../shared/types";

export interface IDetailEditModal extends IFormData {
  open: boolean;
  onClose: () => void;
  showConfirm: boolean;
}
