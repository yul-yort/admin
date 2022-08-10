import { BaseVM } from "../BaseVM";
import { makeObservable, observable } from "mobx";

import { IUserEntity } from "../../../data/User/entity/types";
import { IUserService } from "../../../data/User/service/types";
import { IUserVM } from "./types";
import { INotificationsVM } from "../types";

export class UserVM extends BaseVM implements IUserVM {
  user: IUserEntity | null = null;

  constructor(
    notificationsVM: INotificationsVM,
    private service: IUserService
  ) {
    super(notificationsVM);
    makeObservable(this, {
      user: observable,
    });
  }

  login = async (): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      await this.service.login();
      this.notify.successNotification("Добро пожаловать!");
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  logout = async (): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      await this.service.logout();
      this.notify.successNotification("До скорых встреч!");
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };
}
