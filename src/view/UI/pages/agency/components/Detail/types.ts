import { IAgencyVM } from "src/view/viewModels/Agency/types";
import { IAgencyEntity } from "src/data/entities/Agency/types";
import { IOrderItemEntity } from "src/data/entities/Order/types";

export interface IDetail
  extends Pick<IAgencyVM, "editAgency" | "editLoading" | "deleteAgency"> {
  agency: IAgencyEntity;
  agencyOrders: IOrderItemEntity[];
  deleteOrder: (id: ID) => void;
}
