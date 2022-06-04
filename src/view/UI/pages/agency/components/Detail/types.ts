import { IAgencyVM } from "src/view/viewModels/Agency/types";
import { IAgencyEntity } from "src/data/entities/Agency/types";
import { IOrderItemEntity } from "src/data/entities/Order/types";
import { IOrdersCreateFormFields } from "../DetailOrders/CreateOrder/types";
import { ILocalityEntity } from "src/data/entities/Locality/types";

export interface IDetail
  extends Pick<IAgencyVM, "editAgency" | "editLoading" | "deleteAgency"> {
  agency: IAgencyEntity;
  agencyOrders: IOrderItemEntity[];
  deleteOrder: (id: ID) => Promise<void>;
  ordersLoading: boolean;
  createOrder: (fields: IOrdersCreateFormFields) => void;
  localities: ILocalityEntity[];
  getLocality: () => void;
  localitiesLoading: boolean;
  ordersAddLoading: boolean;
}
