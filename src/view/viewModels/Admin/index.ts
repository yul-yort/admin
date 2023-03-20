import { BaseVM } from "../BaseVM";
import { action, makeObservable, observable } from "mobx";
import jwtDecode from "jwt-decode";

import { IAdminEntity } from "../../../data/Admin/entity/types";
import { IAdminService } from "../../../data/Admin/service/types";
import { IAdminVM, IToken } from "./types";
import { INotificationsVM } from "../types";
import { IFormValues } from "src/view/UI/pages/login/types";
import { CONSTANTS } from "src/constants";

export class AdminVM extends BaseVM implements IAdminVM {
  admin: IAdminEntity | null = null;

  constructor(
    notificationsVM: INotificationsVM,
    private service: IAdminService
  ) {
    super(notificationsVM);
    makeObservable(this, {
      admin: observable,
      getAdmin: action,
    });
  }

  //TODO вынести в модуль Auth
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

  //TODO вынести в модуль Auth
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

  isAuthorized(): boolean {
    const token = localStorage.getItem(CONSTANTS.tokenKey);
    if (!token) {
      return false;
    }

    const decodedToken = jwtDecode<IToken>(token);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp - currentTime > 0;
  }

  getAdmin = async (): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      this.admin = await this.service.getAdmin();
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };
}
