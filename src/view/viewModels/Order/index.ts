import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import { BaseVM } from "../BaseVM";
import { IDataCreateOrder, IOrderVM } from "./types";
import { INotificationsVM } from "../types";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "src/data/Order/entity/types";
import { IOrderService } from "src/data/Order/service/types";
import { IOrderEditFormFields } from "../../UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { errorMapper } from "../mappers";
import { filterOrders } from "./mappers";

export class OrderVM extends BaseVM implements IOrderVM {
  ordersAddLoading = false;

  private _orders: IOrderItemEntity[] | null = [];
  private _agencyOrders: IOrderItemEntity[] | null = [];

  _filterByAgencyName = "";
  _filterByPhone = "";
  _filterByOriginId = 0;
  _filterByDestinationId = 0;

  get orders(): IOrderItemEntity[] | null {
    return (
      this._orders &&
      filterOrders(this._orders, {
        filterByOrigin: this._filterByOriginId,
        filterByDestination: this._filterByDestinationId,
        filterByAgency: this._filterByAgencyName,
        filterByPhone: this._filterByPhone,
      })
    );
  }

  get agencyOrders(): IOrderItemEntity[] | null {
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
      _filterByOriginId: observable,
      _filterByDestinationId: observable,
      ordersAddLoading: observable,

      getList: action,
      filterByAgency: action,
      filterByPhone: action,
      deleteOrder: action,
      createOrder: action,
      editOrder: action,
    });
  }

  filterByAgency = (value: string): void => {
    this._filterByAgencyName = value;
  };

  filterByPhone = (value: string): void => {
    this._filterByPhone = value;
  };

  filterByOrigin = (value: number): void => {
    this._filterByOriginId = value;
  };

  filterByDestination = (value: number): void => {
    this._filterByDestinationId = value;
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

  getListByAgencyId = async (agencyId: number): Promise<void> => {
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

  createOrder = async (fields: IDataCreateOrder): Promise<void> => {
    this.setOrdersAddLoading();
    try {
      const order = await this.service.createOrder(fields);

      if (!this.agencyOrders) {
        throw new Error("error");
      }

      const updatedOrders = [order, ...this.agencyOrders];

      runInAction(() => {
        this._agencyOrders = updatedOrders;
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

  editOrder = async (fields: IOrderEditFormFields): Promise<void> => {
    this.setOrdersAddLoading();
    try {
      if (!this.agencyOrders) {
        throw new Error("Массив поездок пустой");
      }
      const order = await this.service.editOrder(fields);
      const updatedOrders = this.agencyOrders.filter(
        (item) => item.id !== order.id
      );
      runInAction(() => {
        this._agencyOrders = [order, ...updatedOrders];
      });
      this.notify.successNotification("Поездка изменена");
    } catch (err) {
      const error = errorMapper(err);
      const message = `${error?.name} ${error?.message}`;
      this.notify.errorNotification(message);
    } finally {
      this.unsetOrdersAddLoading();
    }
  };

  deleteOrder = async (id: number): Promise<void> => {
    this.setLoading();
    try {
      await this.service.deleteOrder(id);
      if (!this.agencyOrders) {
        throw new Error("error");
      }

      const updatedOrders = this.agencyOrders.filter(
        (item) => item.id !== Number(id)
      );
      runInAction(() => {
        this._agencyOrders = [...updatedOrders];
      });
      this.notify.successNotification(`Поездка удалена`);
    } catch (err) {
      const error = errorMapper(err);
      const message = `${error?.name} ${error?.message}`;
      this.notify.errorNotification(message);
    } finally {
      this.unsetLoading();
    }
  };
}
