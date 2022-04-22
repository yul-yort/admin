import { BaseVM } from "../BaseVM";
import { makeObservable, observable } from "mobx";

import { IUserEntity } from "../../../data/entities/User/types";
import { IUserService } from "../../../data/services/User/types";
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

  login = async () => {
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

  logout = async () => {
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
