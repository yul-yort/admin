import { BaseVM } from "../BaseVM";
import { makeObservable, observable } from "mobx";

import { IUserEntity } from "../../../data/entities/User/types";
import { IUserService } from "../../../data/services/User/types";
import { IUserVM } from "./types";

export class UserVM extends BaseVM implements IUserVM {
  user: IUserEntity | null = null;

  constructor(private service: IUserService) {
    super();
    makeObservable(this, {
      user: observable,
    });
  }

  login = async () => {
    this.setLoading();
    this.unsetError();

    try {
      await this.service.login();
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };
}
