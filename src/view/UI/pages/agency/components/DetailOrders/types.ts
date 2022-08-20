import { ILocalityEntity } from "src/data/Locality/entity/types";
import { IOrderItemEntity } from "src/data/Order/entity/types";
import {
  IOrdersCreateFormFields,
  IOrdersEditSelected,
} from "./CreateOrder/types";

export interface IOrdersHeader {
  handleCreateOrder: () => void;
  ordersLoading: boolean;
}

export interface IOrder {
  id: string;
  origin: string;
  destination: string;
  price?: number;
}

export interface IAgencyOrders {
  handleEditOrder: (id: string) => void;
  agencyOrders: IOrderItemEntity[];
  handleDeleteOrder: (id: string) => void;
}

export interface IDetailOrders {
  agencyOrders: IOrderItemEntity[];
  deleteOrder: (id: ID) => Promise<void>;
  ordersLoading: boolean;
  createOrder: (fields: IOrdersCreateFormFields) => void;
  editOrder: (fields: IOrdersEditSelected) => void;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
}
