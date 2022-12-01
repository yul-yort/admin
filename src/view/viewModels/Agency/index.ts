import { action, makeObservable, observable, runInAction } from "mobx";
import { BaseVM } from "../BaseVM";
import { IAgencyVM } from "./types";
import {
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyEntity,
} from "../../../data/Agency/entity/types";
import { IAgencyService } from "../../../data/Agency/service/types";
import { INotificationsVM } from "../types";
import { ICreateOrEditAgencyFormFields } from "../../UI/components/shared";
import { errorMapper } from "../mappers";

export class AgencyVM extends BaseVM implements IAgencyVM {
  editLoading = false;
  loadingList: number[] = [];

  agency: IAgencyEntity | null = null;
  searchValue = "";

  private _agencies: IAgencyEntity[] | null = null;

  get agencies(): IAgencyEntity[] | null {
    return (
      this._agencies &&
      this._agencies.filter(
        (agency) =>
          agency.name
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

  private setEditLoading = () => {
    this.editLoading = true;
  };

  private unsetEditLoading = () => {
    this.editLoading = false;
  };

  isLoadingItem = (id: number): boolean => this.loadingList.indexOf(id) !== -1;

  searchAgency = (value: string): void => {
    this.searchValue = value.toLocaleLowerCase();
  };

  getAgency = async (params: IAgencyRequestParams): Promise<void> => {
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

  editAgency = async (fields: ICreateOrEditAgencyFormFields): Promise<void> => {
    this.setEditLoading();

    try {
      if (!this.agency) {
        throw new Error("Агенство не выбрано");
      }

      this.agency = await this.service.editAgency(this.agency.id, fields);
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

  deleteAgency = async (params: IAgencyRequestDeleteParams): Promise<void> => {
    this.setLoading();

    try {
      await this.service.deleteAgency(params);
      this.notify.successNotification(
        `Агентство "${this.agency?.name}" удалено`
      );
      this.agency = null;
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  getList = async (): Promise<void> => {
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

  createAgency = async (
    fields: ICreateOrEditAgencyFormFields
  ): Promise<void> => {
    this.setEditLoading();

    const agenciesCopy = this._agencies ? [...this._agencies] : [];

    try {
      const agencyItem = await this.service.createAgency(fields);

      runInAction(() => {
        this._agencies = [agencyItem, ...agenciesCopy];
      });

      this.notify.successNotification(`Агенство ${agencyItem.name} создано`);
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetEditLoading();
    }
  };
}
