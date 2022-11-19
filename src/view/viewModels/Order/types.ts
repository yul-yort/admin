import { IBaseVM } from "../types";
import {
  IOrderItemEntity,
  IOrderItemRequestParams,
} from "../../../data/Order/entity/types";
import { IOrderEditFormFields } from "../../UI/pages/agency/components/DetailOrders/CreateOrder/types";

export interface IOrderVM extends IBaseVM {
  ordersAddLoading: boolean;

  orders: IOrderItemEntity[] | null;
  agencyOrders: IOrderItemEntity[] | null;

  filterByAgency: (value: string) => void;
  filterByPhone: (value: string) => void;
  filterByOrigin: (value: number) => void;
  filterByDestination: (value: number) => void;
  getList: (params?: IOrderItemRequestParams) => Promise<void>;
  getListByAgencyId: (id: number) => Promise<void>;
  deleteOrder: (id: number) => Promise<void>;
  createOrder: (fields: IDataCreateOrder) => Promise<void>;
  editOrder: (fields: IOrderEditFormFields) => Promise<void>;
}

export interface IRoute {
  origin: string;
  destination: string;
}

export interface IDataCreateOrder {
  agency: number;
  originId: Nullable<number>;
  destinationId: Nullable<number>;
  price?: Nullable<number>;
}
