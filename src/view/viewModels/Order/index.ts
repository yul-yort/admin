import { BaseVM } from "../BaseVM";
import { IOrderVM } from "./types";
import { INotificationsVM } from "../types";
import { action, makeObservable, observable } from "mobx";
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
    if (!params) {
      // TODO показ ошибки https://trello.com/c/j49tbAlr
      return;
    }

    await this.service.getList(params);
  };
}
