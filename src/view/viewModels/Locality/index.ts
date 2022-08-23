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
import { filterLocalities } from "./utils";

export class LocalityVM extends BaseVM implements ILocalityVM {
  private _localities: ILocalityEntity[] | null = null;

  private setEditOrCreateLoading = (): void => {
    this.createOrEditLoading = true;
  };

  private unsetEditOrCreateLoading = (): void => {
    this.createOrEditLoading = false;
  };

  searchValue = "";
  createOrEditLoading = false;

  get localities(): ILocalityEntity[] | null {
    if (!this._localities) {
      return this._localities;
    }

    return filterLocalities(this._localities, this.searchValue);
  }

  constructor(
    notificationsVM: INotificationsVM,
    private service: ILocalityService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      searchValue: observable,
      createOrEditLoading: observable,
      getList: action,
      createLocality: action,
    });
  }

  searchLocality = (value: string): void => {
    this.searchValue = value;
  };

  getList = async (): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      const list = await this.service.getList();

      runInAction(() => {
        this._localities = list;
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
        this._localities = list;
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
      const locality = await this.service.editLocality(params);
      if (!this.localities) {
        throw new Error("Нет списка населенных пунктов");
      }
      const localitiesWithoutEditItem = this.localities.filter(
        (item) => item.id !== params.id
      );

      const updatedLocalties = [...localitiesWithoutEditItem, locality];

      runInAction(() => {
        this._localities = updatedLocalties;
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
      const locality = await this.service.deleteLocality(id);
      if (!this.localities) {
        throw new Error("Нет списка населенных пунктов");
      }

      const newLocalities = this.localities.filter(
        (item) => item.id !== locality.id
      );
      runInAction(() => {
        this._localities = newLocalities;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  destroy = (): void => {
    this.searchValue = "";
    this._localities = null;
    this.unsetEditOrCreateLoading();
    this.unsetLoading();
    this.unsetError();
  };
}
