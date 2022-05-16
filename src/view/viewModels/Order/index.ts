import { BaseVM } from "../BaseVM";
import { IOrderVM } from "./types";
import { INotificationsVM } from "../types";
import { action, makeObservable, observable, runInAction } from "mobx";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "../../../data/entities/Order/types";
import { IOrderService } from "../../../data/services/Order/types";

export class OrderVM extends BaseVM implements IOrderVM {
  orders: IOrderItemEntity[] | null = [];

  constructor(
    notificationsVM: INotificationsVM,
    private service: IOrderService
  ) {
    super(notificationsVM);

    makeObservable(this, {
      orders: observable,
      getList: action,
    });
  }

  getList = async (params?: IOrderItemRequestParams): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      const list = await this.service.getList(params);

      runInAction(() => {
        this.orders = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  //TEST
  getAgencyRoutesList = async (id: ID) => {
    try {
      console.log(id);
      const list = await this.service.getAgencyRoutesList(id);
      console.log("list", list);
    } catch {}
  };
}
