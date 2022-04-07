import { INotification, INotificationsVM } from "../../../../viewModels/types";

export interface INotify {
  open: boolean;
  onClose: INotificationsVM["removeNotification"];
  type: INotification["type"];
  message: INotification["message"];
}
