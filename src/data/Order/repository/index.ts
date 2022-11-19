import { BaseRepository } from "../../BaseRepository";
import { IOrderRepository } from "./types";
import {
  IOrderDeleteParamsReq,
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../entity/types";
import { EEndpoints } from "src/constants";
import { IOrderEditFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";

export class OrderRepository
  extends BaseRepository
  implements IOrderRepository
{
  async getList(
    query?: IOrderItemRequestParams
  ): Promise<IOrderItemResponseDTO[]> {
    return await this.api.get<IOrderItemResponseDTO[], IOrderItemRequestParams>(
      { endpoint: EEndpoints.ORDERS, query: query }
    );
  }

  //TODO param - number
  async deleteOrder(params: IOrderDeleteParamsReq): Promise<void> {
    await this.api.delete<IOrderDeleteParamsReq>({
      endpoint: EEndpoints.ORDERS,
      param: params.id,
    });
  }

  async createOrder(fields: IDataCreateOrder): Promise<IOrderItemResponseDTO> {
    return await this.api.post({ endpoint: EEndpoints.ORDERS, body: fields });
  }

  async editOrder(
    fields: IOrderEditFormFields
  ): Promise<IOrderItemResponseDTO> {
    return await this.api.patch<IOrderItemResponseDTO, IOrderEditFormFields>({
      endpoint: EEndpoints.ORDERS,
      body: fields,
    });
  }
}
