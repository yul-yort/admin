import { BaseRepository } from "../BaseRepository";
import { IOrderRepository } from "./types";
import {
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../../entities/Order/types";
import { EEndpoints } from "../../../constants/Endpoints";

export class OrderRepository
  extends BaseRepository
  implements IOrderRepository
{
  async getList(
    params?: IOrderItemRequestParams
  ): Promise<IOrderItemResponseDTO[]> {
    return await this.api.get<IOrderItemResponseDTO[], IOrderItemRequestParams>(
      EEndpoints.ORDERS_LIST,
      params
    );
  }

  async deleteOrder(id: ID): Promise<IOrderItemResponseDTO[]> {
    return await this.api.delete(EEndpoints.ORDER_DELETE, id);
  }
}
