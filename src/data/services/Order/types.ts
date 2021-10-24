import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../domainModels/Order/types";

export interface IOrderService {
  getOrderList(params: IOrderRequestParams): Promise<IOrderDomain[]>;
}
