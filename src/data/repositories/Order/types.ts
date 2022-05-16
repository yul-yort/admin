import {
  IOrderItemRequestParams,
  IOrderItemResponseDTO,
} from "../../entities/Order/types";

export interface IOrderRepository {
  getList: (
    params?: IOrderItemRequestParams
  ) => Promise<IOrderItemResponseDTO[]>;

  //TODO: должен вернуть массив
  getAgencyRoutesList: (id: ID) => void;
}
