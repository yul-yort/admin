import {
  IOrderItemEntity,
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../../entities/Order/types";

export interface IOrderService {
  getList: (params?: IOrderItemRequestParams) => Promise<IOrderItemEntity[]>;
  deleteOrder: (id: ID) => Promise<IOrderItemEntity[]>;
}
