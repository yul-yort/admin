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

  addNotification = (notification: INotification): void => {
    this.notification = notification;
  };

  removeNotification = (): void => {
    this.notification = null;
  };
}
