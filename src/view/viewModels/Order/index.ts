import { BaseVM } from "../BaseVM";
import { IAgencyVM } from "./types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../../data/domainModels/Order/types";
import { IOrderService } from "../../../data/services/Order/types";
import { action, makeObservable, observable } from "mobx";

export class OrderVM extends BaseVM implements IAgencyVM {
  orderList: IOrderDomain[] | null = null;

  constructor(private service: IOrderService) {
    super();
    makeObservable(this, {
      orderList: observable,
      getList: action,
    });
  }

  async getList(params: IOrderRequestParams) {
    this.setLoading();
    this.unsetError();

    try {
      this.orderList = await this.service.getOrderList(params);
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  }
}
