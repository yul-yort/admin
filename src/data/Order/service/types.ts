import { IOrdersCreateFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IOrderItemEntity, IOrderItemRequestParams } from "../entity/types";

export interface IOrderService {
  getList: (params?: IOrderItemRequestParams) => Promise<IOrderItemEntity[]>;
  deleteOrder: (id: ID) => Promise<IOrderItemEntity[]>;
  createOrder: (fields: IOrdersCreateFormFields) => Promise<IOrderItemEntity[]>;
  editOrder: (fields: any) => Promise<IOrderItemEntity[]>;
}
