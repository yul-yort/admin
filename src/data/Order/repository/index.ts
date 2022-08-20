import { BaseRepository } from "../../BaseRepository";
import { IOrderRepository } from "./types";
import {
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../entity/types";
import { EEndpoints } from "src/constants";
import {
  IOrdersCreateFormFields,
  IOrdersEditSelected,
} from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";

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

  async createOrder(
    fields: IOrdersCreateFormFields
  ): Promise<IOrderItemResponseDTO[]> {
    return await this.api.post(EEndpoints.ORDER_CREATE, fields);
  }

  async editOrder(
    fields: IOrdersEditSelected
  ): Promise<IOrderItemResponseDTO[]> {
    return await this.api.post(EEndpoints.ORDER_EDIT, fields);
  }
}
