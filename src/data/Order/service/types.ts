import { IOrderEditFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";
import { IOrderItemEntity, IOrderItemRequestParams } from "../entity/types";

export interface IOrderService {
  getList: (params?: IOrderItemRequestParams) => Promise<IOrderItemEntity[]>;
  deleteOrder: (id: number) => Promise<void>;
  createOrder: (fields: IDataCreateOrder) => Promise<IOrderItemEntity>;
  editOrder: (fields: IOrderEditFormFields) => Promise<IOrderItemEntity>;
}
