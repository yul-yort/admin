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
} from "../../../data/Agency/entity/types";
import { IAgencyService } from "../../../data/Agency/service/types";
import { INotificationsVM } from "../types";
import { ICreateOrEditAgencyFormFields } from "../../UI/components/shared/AgencyCreateEditForm/types";
import { VMPhonesRequestFormatter } from "src/view/UI/components/shared/AgencyCreateEditForm/mappers";
import { errorMapper } from "../mappers";

export class AgencyVM extends BaseVM implements IAgencyVM {
  editLoading: boolean = false;
  loadingList: ID[] = [];

  agency: IAgencyEntity | null = null;
  searchValue: string = "";

  private _agencies: IAgencyItemEntity[] | null = null;

  get agencies() {
    return (
      this._agencies &&
      this._agencies.filter(
        (agency) =>
          agency.agencyName
            .toLocaleLowerCase()
            .trim()
            .includes(this.searchValue.trim()) ||
          agency.phones?.some((phone) =>
            phone.includes(this.searchValue.trim())
          )
      )
    );
  }

  constructor(
    notificationsVM: INotificationsVM,
    private service: IAgencyService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      agency: observable,
      editLoading: observable,
      loadingList: observable,
      searchValue: observable,
      getAgency: action,
      editAgency: action,
      getList: action,
      createAgency: action,
    });
  }

  private setLoadingItem = (id: ID) => {
    this.loadingList.push(id);
  };

  private unsetLoadingItem = (id: ID) => {
    const index = this.loadingList.indexOf(id);

    if (index >= 0) {
      this.loadingList.splice(index, 1);
    }
  };

  private setEditLoading = () => {
    this.editLoading = true;
  };

  private unsetEditLoading = () => {
    this.editLoading = false;
  };

  isLoadingItem = (id: ID) => this.loadingList.indexOf(id) !== -1;

  searchAgency = (value: string) => {
    this.searchValue = value.toLocaleLowerCase();
  };

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
    this.setEditLoading();

    try {
      this.agency = await this.service.editAgency(fields);
      this.notify.successNotification("Данные сохранены");
    } catch (err) {
      const error = errorMapper(err);

      const message = `${error?.name} ${error?.message}`;
      this.notify.errorNotification(message);

      throw err;
    } finally {
      this.unsetEditLoading();
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
      const list = await this.service.getList();

      runInAction(() => {
        this._agencies = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  createAgency = async (fields: ICreateOrEditAgencyFormFields) => {
    this.setEditLoading();

    const newAgency = {
      ...fields,
      id: uuid(),
      createDate: format(new Date(), "dd.MM.yyyy  HH:mm"),
      phones: VMPhonesRequestFormatter(fields.phones),
    };

    this.setLoadingItem(newAgency.id);
    const agenciesCopy = this._agencies ? [...this._agencies] : [];
    runInAction(() => {
      this._agencies = [newAgency, ...agenciesCopy];
    });

    try {
      const agencyItem = await this.service.createAgency(fields);

      runInAction(() => {
        this._agencies = [agencyItem, ...agenciesCopy];
      });

      this.notify.successNotification(
        `Агенство ${agencyItem.agencyName} создано`
      );
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetEditLoading();
      this.unsetLoadingItem(newAgency.id);
    }
  };
}
