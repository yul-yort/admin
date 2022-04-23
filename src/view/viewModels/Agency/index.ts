import { action, makeObservable, observable, runInAction } from "mobx";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import { BaseVM } from "../BaseVM";
import { IAgencyVM } from "./types";
import {
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyItemEntity,
} from "../../../data/entities/Agency/types";
import { IAgencyService } from "../../../data/services/Agency/types";
import { INotificationsVM } from "../types";
import { ICreateOrEditAgencyFormFields } from "../../UI/components/shared/AgencyCreateEditForm/types";
import { VMPhonesRequestFormatter } from "src/view/UI/components/shared/AgencyCreateEditForm/mappers";

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
      createAgency: action,
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

  editAgency = async (fields: ICreateOrEditAgencyFormFields) => {
    this.editLoading = true;

    try {
      this.agency = await this.service.editAgency(fields);
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
      throw err;
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

  createAgency = async (fields: ICreateOrEditAgencyFormFields) => {
    this.editLoading = true;

    const newAgency = {
      ...fields,
      id: uuid(),
      createDate: format(new Date(), "dd.MM.yyyy  HH:mm"),
      phones: VMPhonesRequestFormatter(fields.phones),
    };

    const agenciesCopy = this.agencies ? [...this.agencies] : [];

    runInAction(() => {
      this.agencies = [newAgency, ...agenciesCopy];
    });

    try {
      const agencyItem = await this.service.createAgency(fields);

      runInAction(() => {
        this.agencies = [agencyItem, ...agenciesCopy];
      });

      this.notify.successNotification(
        `Агенство ${agencyItem.agencyName} создано`
      );
    } catch (err) {
      this.setError(err);
    } finally {
      this.editLoading = false;
    }
  };
}
