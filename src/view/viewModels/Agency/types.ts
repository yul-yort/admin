import { IBaseVM } from "../types";
import {
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyItemEntity,
} from "../../../data/entities/Agency/types";
import { ICreateOrEditAgencyFormFields } from "../../UI/components/shared/AgencyCreateEditForm/types";

export interface IAgencyVM extends IBaseVM {
  agency: IAgencyEntity | null;
  agencies: IAgencyItemEntity[] | null;
  editLoading: boolean;
  loadingList: ID[];

  isLoadingItem: (id: ID) => boolean;
  setLoadingItem: (id: ID) => void;
  unsetLoadingItem: (id: ID) => void;

  getAgency: (params: IAgencyRequestParams) => Promise<void>;
  editAgency: (params: ICreateOrEditAgencyFormFields) => Promise<void>;
  deleteAgency: (params: IAgencyRequestDeleteParams) => Promise<void>;
  searchAgency: (value:string) => void;
  getList: () => Promise<void>;

  createAgency: (params: ICreateOrEditAgencyFormFields) => Promise<void>;
}
