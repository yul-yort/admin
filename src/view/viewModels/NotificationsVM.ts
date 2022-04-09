import { action, makeObservable, observable } from "mobx";
import { INotification, INotificationsVM } from "./types";

export class NotificationsVM implements INotificationsVM {
  notification: INotification | null = null;

  constructor() {
    makeObservable(this, {
      notification: observable,
      addNotification: action,
      removeNotification: action,
    });
  }

  successNotification = (message: string): void => {
    this.addNotification({
      type: "success",
      message: message,
    });
  };

  errorNotification = (message: string): void => {
    this.addNotification({
      type: "error",
      message: message,
    });
  };

  addNotification = (notification: INotification): void => {
    this.notification = notification;
  };

  removeNotification = (): void => {
    this.notification = null;
  };
}
