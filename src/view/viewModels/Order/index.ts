import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import { BaseVM } from "../BaseVM";
import { IOrderVM } from "./types";
import { INotificationsVM } from "../types";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "src/data/entities/Order/types";
import { IOrderService } from "src/data/services/Order/types";
import { IOrdersCreateFormFields } from "../../UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { errorMapper } from "../mappers";
import { filterOrders } from "./mappers";

export class OrderVM extends BaseVM implements IOrderVM {
  ordersAddLoading: boolean = false;

  private _orders: IOrderItemEntity[] | null = [];
  private _agencyOrders: IOrderItemEntity[] | null = [];

  _filterByAgencyName: string = "";
  _filterByPhone: string = "";
  _filterByOrigin: string = "";
  _filterByDestination: string = "";

  get orders() {
    return (
      this._orders &&
      filterOrders(this._orders, {
        filterByOrigin: this._filterByOrigin,
        filterByDestination: this._filterByDestination,
        filterByAgency: this._filterByAgency,
        filterByPhone: this._filterByPhone,
      })
    );
  }

  get agencyOrders() {
    return this._agencyOrders;
  }

  constructor(
    notificationsVM: INotificationsVM,
    private service: IOrderService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      orders: computed,
      _filterByAgencyName: observable,
      _filterByPhone: observable,
      _filterByOrigin: observable,
      _filterByDestination: observable,
      ordersAddLoading: observable,

      getList: action,
      filterByAgency: action,
      filterByPhone: action,
      deleteOrder: action,
      createOrder: action,
    });
  }

  filterByAgency = (value: string) => {
    this._filterByAgencyName = value;
  };

  filterByPhone = (value: string) => {
    this._filterByPhone = value;
  };

  filterByOrigin = (value: string) => {
    this._filterByOrigin = value;
  };

  filterByDestination = (value: string) => {
    this._filterByDestination = value;
  };

  private setOrdersAddLoading = () => {
    this.ordersAddLoading = true;
  };

  private unsetOrdersAddLoading = () => {
    this.ordersAddLoading = false;
  };

  getList = async (params?: IOrderItemRequestParams): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      const list = await this.service.getList(params);

      runInAction(() => {
        this._orders = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  getListByAgencyId = async (agencyId: ID): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      const list = await this.service.getList({ agencyId });

      runInAction(() => {
        this._agencyOrders = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  createOrder = async (fields: IOrdersCreateFormFields) => {
    this.setOrdersAddLoading();
    try {
      const orders = await this.service.createOrder(fields);
      runInAction(() => {
        this._agencyOrders = orders;
      });
      this.notify.successNotification("Поездка добавлена");
    } catch (err) {
      const error = errorMapper(err);
      const message = `${error?.name} ${error?.message}`;
      this.notify.errorNotification(message);
    } finally {
      this.unsetOrdersAddLoading();
    }
  };

  deleteOrder = async (id: ID) => {
    this.setLoading();
    try {
      const orders = await this.service.deleteOrder(id);

      runInAction(() => {
        this._agencyOrders = orders;
      });
      this.notify.successNotification(`Поездка удалена`);
    } catch (err) {
      const error = errorMapper(err);
      const message = `${error?.name} ${error?.message}`;
      this.notify.errorNotification(message);
    } finally {
      this.setLoading();
    }
  };
}
