import { IBaseVM } from "../types";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "../../../data/entities/Order/types";

export interface IOrderVM extends IBaseVM {
  orders: IOrderItemEntity[] | null;

  getList: (params?: IOrderItemRequestParams) => Promise<void>;
}
