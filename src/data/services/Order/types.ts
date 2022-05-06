import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "../../entities/Order/types";

export interface IOrderService {
  getList: (params?: IOrderItemRequestParams) => Promise<IOrderItemEntity[]>;
}
