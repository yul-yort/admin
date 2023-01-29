import { BaseVM } from "../BaseVM";
import { makeObservable, observable } from "mobx";

import { IAdminEntity } from "../../../data/Admin/entity/types";
import { IAdminService } from "../../../data/Admin/service/types";
import { IAdminVM } from "./types";
import { INotificationsVM } from "../types";
import { IFormValues } from "src/view/UI/pages/login/types";
import Cookies from "js-cookie";
import { CONSTANTS } from "src/constants";
import { Admin } from "../../../data/Admin/entity";

export class AdminVM extends BaseVM implements IAdminVM {
  admin: IAdminEntity | null = null;
  get authorized(): boolean {
    return !!Cookies.get(CONSTANTS.tokenCookieKey);
  }

  constructor(
    notificationsVM: INotificationsVM,
    private service: IAdminService
  ) {
    super(notificationsVM);
    this.admin = new Admin({ id: 0 });
    makeObservable(this, {
      admin: observable,
    });
  }

  login = async (data: IFormValues): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      await this.service.login(data);
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
