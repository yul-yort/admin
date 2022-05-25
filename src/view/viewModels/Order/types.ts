import { IBaseVM } from "../types";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "../../../data/entities/Order/types";

export interface IOrderVM extends IBaseVM {
  orders: IOrderItemEntity[] | null;

  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  filterByOrigin: (value: string) => void;
  filterByDestination: (value: string) => void;
  getList: (params?: IOrderItemRequestParams) => Promise<void>;
}
