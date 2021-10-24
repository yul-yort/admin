import { IOrderService } from "./types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../domainModels/Order/types";
import { IOrderRepository } from "../../repositories/Order/types";
import { OrderDomain } from "../../domainModels/Order";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  async getOrderList(params: IOrderRequestParams): Promise<IOrderDomain[]> {
    const orders = await this.repository.getOrderList(params);

    return orders.map((orderDTO) => new OrderDomain(orderDTO));
  }
}
