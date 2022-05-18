import { IOrderItemEntity } from "../../../../../../data/entities/Order/types";

export interface IRoutesHeader {
  handleCreateRouteClick: () => void;
}

export interface IRoute {
  id: string;
  origin: string;
  destination: string;
  price?: number;
}

export interface IAgencyRoutes {
  handleEditRouteClick: (id: string) => void;
  agencyOrders: IOrderItemEntity[];
  handleDeleteRouteClick: (id: string) => void;
}

export interface IDetailOrders {
  agencyOrders: IOrderItemEntity[];
}
