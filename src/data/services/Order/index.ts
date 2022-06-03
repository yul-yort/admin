import { IOrderService } from "./types";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "../../entities/Order/types";
import { IOrderRepository } from "../../repositories/Order/types";
import { OrderItem } from "../../entities/Order";
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
}
