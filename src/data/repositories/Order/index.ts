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

  async getAgencyRoutesList(id: ID) {
    return await this.api.get(EEndpoints.AGENCY_ROUTER_LIST, id);
  }
}
