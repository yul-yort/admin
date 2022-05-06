import {
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../../entities/Order/types";

export interface IOrderRepository {
  getList: (
    params?: IOrderItemRequestParams
  ) => Promise<IOrderItemResponseDTO[]>;
}
