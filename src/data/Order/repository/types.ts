import { IOrderEditFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";
import {
  IOrderDeleteParamsReq,
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../entity/types";

export interface IOrderRepository {
  getList: (
    query?: IOrderItemRequestParams
  ) => Promise<IOrderItemResponseDTO[]>;

  deleteOrder: (params: IOrderDeleteParamsReq) => Promise<void>;

  createOrder: (fields: IDataCreateOrder) => Promise<IOrderItemResponseDTO>;

  editOrder: (fields: IOrderEditFormFields) => Promise<IOrderItemResponseDTO>;
}
