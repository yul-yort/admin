import { IOrdersEditSelected } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";
import { IOrderItemEntity, IOrderItemRequestParams } from "../entity/types";

export interface IOrderService {
  getList: (params?: IOrderItemRequestParams) => Promise<IOrderItemEntity[]>;
  deleteOrder: (id: ID) => Promise<IOrderItemEntity>;
  createOrder: (fields: IDataCreateOrder) => Promise<IOrderItemEntity>;
  editOrder: (fields: IOrdersEditSelected) => Promise<IOrderItemEntity>;
}
