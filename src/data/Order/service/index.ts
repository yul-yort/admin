import { IOrderService } from "./types";
import { IOrderItemEntity, IOrderItemRequestParams } from "../entity/types";
import { IOrderRepository } from "../repository/types";
import { OrderItem } from "../entity";
import { IOrdersEditSelected } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  getList = async (
    params?: IOrderItemRequestParams
  ): Promise<IOrderItemEntity[]> => {
    const orders = await this.repository.getList(params);

    return orders.map((orderItem) => new OrderItem(orderItem));
  };

  async deleteOrder(id: ID): Promise<IOrderItemEntity> {
    const order = await this.repository.deleteOrder({ id });

    return new OrderItem(order);
  }

  async createOrder(fields: IDataCreateOrder): Promise<IOrderItemEntity> {
    const order = await this.repository.createOrder(fields);

    return new OrderItem(order);
  }

  async editOrder(fields: IOrdersEditSelected): Promise<IOrderItemEntity[]> {
    console.log(fields);
    // return await this.repository.editOrder(fields);
    return [];
  }
}
