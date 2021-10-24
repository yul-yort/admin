import { IBaseVM } from "../types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../../data/domainModels/Order/types";

export interface IAgencyVM extends IBaseVM {
  orderList: IOrderDomain[] | null;

  getList: (params: IOrderRequestParams) => Promise<void>;
}
