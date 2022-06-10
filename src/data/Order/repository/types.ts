import { IOrdersCreateFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import {
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../entity/types";

export interface IOrderRepository {
  getList: (
    params?: IOrderItemRequestParams
  ) => Promise<IOrderItemResponseDTO[]>;

  deleteOrder: (id: ID) => Promise<IOrderItemResponseDTO[]>;

  createOrder: (
    fields: IOrdersCreateFormFields
  ) => Promise<IOrderItemResponseDTO[]>;

  editOrder: (fields: any) => Promise<IOrderItemResponseDTO[]>;
}
