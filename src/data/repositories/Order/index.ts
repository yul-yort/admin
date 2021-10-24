import { IOrderRepository } from "./types";
import {
  IOrderRequestParams,
  IOrderResponseDTO,
} from "../../domainModels/Order/types";
import { EEndpoints } from "../../../constants/Endpoints";
import { BaseRepository } from "../BaseRepository";

export class OrderRepository
  extends BaseRepository
  implements IOrderRepository
{
  async getOrderList(
    params: IOrderRequestParams
  ): Promise<IOrderResponseDTO[]> {
    return await this.api.get<IOrderResponseDTO[], IOrderRequestParams>(
      EEndpoints.orders,
      params
    );
  }
}
