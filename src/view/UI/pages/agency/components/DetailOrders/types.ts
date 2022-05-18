import { IOrderItemEntity } from "src/data/entities/Order/types";

export interface IOrdersHeader {
  handleCreateOrder: () => void;
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
  deleteOrder: (id: ID) => void;
}
