import { IBaseVM } from "../types";
import {
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyItemEntity,
} from "../../../data/entities/Agency/types";
import { ICreateOrEditAgencyFormFields } from "../../UI/components/shared/AgencyCreateEditForm/types";
import {
  IOrderItemEntity,
  IOrderItemResponseDTO,
} from "../../../data/entities/Order/types";
import { IOrdersCreateFormFields } from "src/view/UI/pages/agency/components/DetailOrders/CreateOrder/types";

export interface IAgencyVM extends IBaseVM {
  // loaders
  editLoading: boolean;
  ordersLoading: boolean;
  loadingList: ID[];
  ordersAddLoading: boolean;

  // entities
  agency: IAgencyEntity | null;
  agencyOrders: IOrderItemEntity[] | null;
  agencies: IAgencyItemEntity[] | null;

  // methods
  isLoadingItem: (id: ID) => boolean;
  getAgency: (params: IAgencyRequestParams) => Promise<void>;
  editAgency: (params: ICreateOrEditAgencyFormFields) => Promise<void>;
  deleteAgency: (params: IAgencyRequestDeleteParams) => Promise<void>;
  createAgency: (params: ICreateOrEditAgencyFormFields) => Promise<void>;
  searchAgency: (value: string) => void;
  getList: () => Promise<void>;
  deleteOrder: (id: ID) => Promise<void>;
  createOrder: (fields: IOrdersCreateFormFields) => Promise<void>;
}
