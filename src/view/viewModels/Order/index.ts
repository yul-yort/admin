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
import { filterOrders } from "./mappers";

export class OrderVM extends BaseVM implements IOrderVM {
  private _orders: IOrderItemEntity[] | null = [];
  _filterByAgency: string = "";
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

  constructor(
    notificationsVM: INotificationsVM,
    private service: IOrderService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      orders: computed,
      _filterByAgency: observable,
      _filterByPhone: observable,
      _filterByOrigin: observable,
      _filterByDestination: observable,
      getList: action,
      filterByAgency: action,
      filterByPhone: action,
    });
  }

  filterByAgency = (value: string) => {
    this._filterByAgency = value;
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
}
