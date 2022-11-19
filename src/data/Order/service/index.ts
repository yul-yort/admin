import { IOrderService } from "./types";
import { IOrderItemEntity, IOrderItemRequestParams } from "../entity/types";
import { IOrderRepository } from "../repository/types";
import { OrderItem } from "../entity";
import { IOrderEditFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  getList = async (
    params?: IOrderItemRequestParams
  ): Promise<IOrderItemEntity[]> => {
    const orders = await this.repository.getList(params);

    return orders.map((orderItem) => new OrderItem(orderItem));
  };

  async deleteOrder(id: number): Promise<void> {
    await this.repository.deleteOrder({ id });
  }

  async createOrder(fields: IDataCreateOrder): Promise<IOrderItemEntity> {
    const order = await this.repository.createOrder(fields);

    return new OrderItem(order);
  }

  async editOrder(fields: IOrderEditFormFields): Promise<IOrderItemEntity> {
    const editedOrder = await this.repository.editOrder(fields);
    return new OrderItem(editedOrder);
  }
}
