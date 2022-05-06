import { IOrderService } from "./types";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "../../entities/Order/types";
import { IOrderRepository } from "../../repositories/Order/types";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  getList = async (
    params: IOrderItemRequestParams
  ): Promise<IOrderItemEntity[]> => {
    return this.repository.getList(params);
  };
}
