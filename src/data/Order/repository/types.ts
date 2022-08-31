import { IOrdersEditSelected } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";
import {
  IOrderDeleteParamsReq,
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../entity/types";

export interface IOrderRepository {
  getList: (
    params?: IOrderItemRequestParams
  ) => Promise<IOrderItemResponseDTO[]>;

  deleteOrder: (
    params: IOrderDeleteParamsReq
  ) => Promise<IOrderItemResponseDTO>;

  createOrder: (fields: IDataCreateOrder) => Promise<IOrderItemResponseDTO>;

  editOrder: (fields: IOrdersEditSelected) => Promise<IOrderItemResponseDTO[]>;
}
