import { IBaseVM } from "../types";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "../../../data/entities/Order/types";
import { IOrdersCreateFormFields } from "../../UI/pages/agency/components/DetailOrders/CreateOrder/types";

export interface IOrderVM extends IBaseVM {
  ordersAddLoading: boolean;

  orders: IOrderItemEntity[] | null;
  agencyOrders: IOrderItemEntity[] | null;

  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  filterByOrigin: (value: string) => void;
  filterByDestination: (value: string) => void;
  getList: (params?: IOrderItemRequestParams) => Promise<void>;
  getListByAgencyId: (id: ID) => Promise<void>;
  deleteOrder: (id: ID) => Promise<void>;
  createOrder: (fields: IOrdersCreateFormFields) => Promise<void>;
}
