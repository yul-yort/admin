import { BaseRepository } from "../../BaseRepository";
import { IOrderRepository } from "./types";
import {
  IOrderDeleteParamsReq,
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../entity/types";
import { EEndpoints } from "src/common";
import { IOrderEditFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";

export class OrderRepository
  extends BaseRepository
  implements IOrderRepository
{
  async getList(
    query?: IOrderItemRequestParams
  ): Promise<IOrderItemResponseDTO[]> {
    return await this.execute<IOrderItemResponseDTO[], IOrderItemRequestParams>(
      "get",
      EEndpoints.ORDERS,
      { query }
    );
  }

  //TODO param - number
  async deleteOrder(params: IOrderDeleteParamsReq): Promise<void> {
    await this.execute<IOrderDeleteParamsReq>("delete", EEndpoints.ORDERS, {
      param: params.id,
    });
  }

  async createOrder(fields: IDataCreateOrder): Promise<IOrderItemResponseDTO> {
    return await this.execute("post", EEndpoints.ORDERS, {
      body: fields,
    });
  }

  async editOrder(
    fields: IOrderEditFormFields
  ): Promise<IOrderItemResponseDTO> {
    return await this.execute<IOrderItemResponseDTO, IOrderEditFormFields>(
      "patch",
      EEndpoints.ORDERS,
      {
        body: fields,
      }
    );
  }
}
