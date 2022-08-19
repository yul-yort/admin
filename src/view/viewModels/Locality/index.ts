import { action, makeObservable, observable, runInAction } from "mobx";
import { BaseVM } from "../BaseVM";
import { INotificationsVM } from "../types";
import {
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
  ILocalityEntity,
} from "src/data/Locality/entity/types";
import { ILocalityService } from "src/data/Locality/service/types";
import { ILocalityVM } from "./types";

export class LocalityVM extends BaseVM implements ILocalityVM {
  localities: ILocalityEntity[] | null = null;
  createOrEditLoading = false;

  private setEditOrCreateLoading = (): void => {
    this.createOrEditLoading = true;
  };

  private unsetEditOrCreateLoading = (): void => {
    this.createOrEditLoading = false;
  };

  constructor(
    notificationsVM: INotificationsVM,
    private service: ILocalityService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      localities: observable,
      createOrEditLoading: observable,
      getList: action,
      createLocality: action,
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

  createLocality = async (params: ILocalityCreateParamsReq): Promise<void> => {
    this.setEditOrCreateLoading();

    try {
      const list = await this.service.createLocality(params);

      runInAction(() => {
        this.localities = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetEditOrCreateLoading();
    }
  };

  editLocality = async (params: ILocalityEditParamsReq): Promise<void> => {
    this.setEditOrCreateLoading();

    try {
      const list = await this.service.editLocality(params);

      runInAction(() => {
        this.localities = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetEditOrCreateLoading();
    }
  };

  deleteLocality = async (id: ID): Promise<void> => {
    this.setLoading();

    try {
      const list = await this.service.deleteLocality(id);

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
