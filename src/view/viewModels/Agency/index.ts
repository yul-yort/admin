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
import { IOrderService } from "../../../data/services/Order/types";
import { IOrderItemEntity } from "../../../data/entities/Order/types";

export class AgencyVM extends BaseVM implements IAgencyVM {
  editLoading: boolean = false;
  loadingList: ID[] = [];

  agency: IAgencyEntity | null = null;
  agencyOrders: IOrderItemEntity[] | null = null;
  searchValue: string = "";

  private _agencies: IAgencyItemEntity[] | null = null;

  get agencies() {
    return (
      this._agencies &&
      this._agencies.filter(
        (agency) =>
          agency.agencyName.toLocaleLowerCase().includes(this.searchValue) ||
          agency.phones?.some((phone) => phone.includes(this.searchValue))
      )
    );
  }

  constructor(
    notificationsVM: INotificationsVM,
    private service: IAgencyService,
    private orderService: IOrderService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      agency: observable,
      agencyOrders: observable,
      editLoading: observable,
      loadingList: observable,
      searchValue: observable,
      getAgency: action,
      editAgency: action,
      getList: action,
      createAgency: action,
      setLoadingItem: action,
      unsetLoadingItem: action,
      setEditLoading: action,
      unsetEditLoading: action,
      deleteOrder: action,
    });
  }

  searchAgency = (value: string) => {
    this.searchValue = value.toLocaleLowerCase();
  };

  isLoadingItem = (id: ID) => this.loadingList.indexOf(id) !== -1;

  setLoadingItem = (id: ID) => {
    this.loadingList.push(id);
  };

  unsetLoadingItem = (id: ID) => {
    const index = this.loadingList.indexOf(id);

    if (index >= 0) {
      this.loadingList.splice(index, 1);
    }
  };

  setEditLoading = () => {
    this.editLoading = true;
  };

  unsetEditLoading = () => {
    this.editLoading = false;
  };

  getAgency = async (params: IAgencyRequestParams) => {
    this.setLoading();
    this.unsetError();

    try {
      const agency = await this.service.getAgency(params);
      const orders = await this.orderService.getList({
        agencyId: params.id,
      });

      runInAction(() => {
        this.agency = agency;
        this.agencyOrders = orders;
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
      // @ts-ignore
      const message = `${err?.name} ${err?.message}`;
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

  deleteOrder = async (id: ID) => {
    this.setLoading();
    try {
      const orders = await this.orderService.deleteOrder(id);
      this.notify.successNotification(`Поездка удалена`);
      runInAction(() => {
        this.agencyOrders = orders;
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
