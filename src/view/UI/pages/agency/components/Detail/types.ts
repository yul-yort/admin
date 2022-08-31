import { IAgencyVM } from "src/view/viewModels/Agency/types";
import { IAgencyEntity } from "src/data/Agency/entity/types";
import { IOrderItemEntity } from "src/data/Order/entity/types";
import {
  IOrdersCreateFormFields,
  IOrdersEditSelected,
} from "../DetailOrders/CreateOrder/types";
import { ILocalityEntity } from "src/data/Locality/entity/types";
import { IDataCreateOrder } from "src/view/viewModels/Order/types";

export interface IDetail
  extends Pick<IAgencyVM, "editAgency" | "editLoading" | "deleteAgency"> {
  agency: IAgencyEntity;
  agencyOrders: IOrderItemEntity[];
  deleteOrder: (id: ID) => Promise<void>;
  ordersLoading: boolean;
  createOrder: (fields: IDataCreateOrder) => void;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
  editOrder: (fields: IOrdersEditSelected) => void;
}
