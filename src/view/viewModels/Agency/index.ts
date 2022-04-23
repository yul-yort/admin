import { BaseVM } from "../BaseVM";
import { IAgencyVM } from "./types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyItemEntity,
} from "../../../data/entities/Agency/types";
import { IAgencyService } from "../../../data/services/Agency/types";
import { action, makeObservable, observable, runInAction } from "mobx";
import { INotificationsVM } from "../types";

// TODO очистка сущностей, при уходе со страницы?
export class AgencyVM extends BaseVM implements IAgencyVM {
  editLoading: boolean = false;
  loadingList: ID[] = [];

  agency: IAgencyEntity | null = null;
  agencies: IAgencyItemEntity[] | null = null;

  constructor(
    notificationsVM: INotificationsVM,
    private service: IAgencyService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      agency: observable,
      agencies: observable,
      editLoading: observable,
      loadingList: observable,
      getAgency: action,
      editAgency: action,
      getList: action,
    });
  }

  getAgency = async (params: IAgencyRequestParams) => {
    this.setLoading();
    this.unsetError();

    try {
      const agency = await this.service.getAgency(params);

      runInAction(() => {
        this.agency = agency;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  editAgency = async (params: IAgencyRequestEditParams) => {
    this.editLoading = true;

    try {
      this.agency = await this.service.editAgency(params);
      this.notify.successNotification("Данные сохранены");
    } catch (err) {
      // @ts-ignore
      const message = `${err?.name} ${err?.message}`;
      this.notify.errorNotification(message);

      throw err;
    } finally {
      this.editLoading = false;
    }
  };

  deleteAgency = async (params: IAgencyRequestDeleteParams) => {
    this.setLoading();

    try {
      await this.service.deleteAgency(params);
      this.notify.successNotification(
        `Агентство "${this.agency?.agencyName}" удалено`
      );
      this.agency = null;
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  getList = async () => {
    this.setLoading();
    this.unsetError();

    try {
      const agencies = await this.service.getList();

      runInAction(() => {
        this.agencies = agencies;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };
}
