import { action, makeObservable, observable, runInAction } from "mobx";
import { BaseVM } from "../BaseVM";
import { INotificationsVM } from "../types";
import { ILocalityEntity } from "src/data/entities/Locality/types";
import { ILocalityService } from "src/data/services/Locality/types";
import { ILocalityVM } from "./types";

export class LocalityVM extends BaseVM implements ILocalityVM {
  localities: ILocalityEntity[] | null = null;

  constructor(
    notificationsVM: INotificationsVM,
    private service: ILocalityService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      localities: observable,
      getList: action,
    });
  }

  getList = async (): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      const list = await this.service.getList();

      runInAction(() => {
        this.localities = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };
}
