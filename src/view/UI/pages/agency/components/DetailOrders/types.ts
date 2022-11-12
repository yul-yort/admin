import { ILocalityEntity } from "src/data/Locality/entity/types";
import { IOrderItemEntity } from "src/data/Order/entity/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";
import { IOrdersEditSelected } from "./CreateOrder/types";

export interface IOrdersHeader {
  handleCreateOrder: () => void;
  ordersLoading: boolean;
}

export interface IOrder extends IOrderItemEntity {}

export interface IAgencyOrders {
  handleEditOrder: (id: string) => void;
  agencyOrders: IOrderItemEntity[];
  handleDeleteOrder: (id: number) => void;
}

export interface IDetailOrders {
  agencyOrders: IOrderItemEntity[];
  deleteOrder: (id: number) => Promise<void>;
  ordersLoading: boolean;
  createOrder: (fields: IDataCreateOrder) => void;
  editOrder: (fields: IOrdersEditSelected) => void;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
  agencyID: number;
}
