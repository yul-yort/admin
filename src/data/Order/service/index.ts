import { IOrderService } from "./types";
import { IOrderItemEntity, IOrderItemRequestParams } from "../entity/types";
import { IOrderRepository } from "../repository/types";
import { OrderItem } from "../entity";
import { IOrdersCreateFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  getList = async (
    params?: IOrderItemRequestParams
  ): Promise<IOrderItemEntity[]> => {
    const orders = await this.repository.getList(params);

    return orders.map((orderItem) => new OrderItem(orderItem));
  };

  async deleteOrder(id: ID): Promise<IOrderItemEntity[]> {
    const orders = await this.repository.deleteOrder(id);

    return orders.map((orderItem) => new OrderItem(orderItem));
  }

  async createOrder(
    fields: IOrdersCreateFormFields
  ): Promise<IOrderItemEntity[]> {
    const orders = await this.repository.createOrder(fields);

    return orders.map((orderItem) => new OrderItem(orderItem));
  }

  async editOrder(fields: any): Promise<IOrderItemEntity[]> {
    return await this.repository.editOrder(fields);
  }
}
