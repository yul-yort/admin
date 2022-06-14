import { IBaseVM } from "../types";
import {
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyEntity,
} from "../../../data/Agency/entity/types";
// TODO наверное viewModel не должен зависеть от UI.
// решить, что делать со всеми такими зависимостями
import { ICreateOrEditAgencyFormFields } from "../../UI/components/shared/AgencyCreateEditForm/types";

export interface IAgencyVM extends IBaseVM {
  // loaders
  editLoading: boolean;
  loadingList: ID[];

  // entities
  agency: IAgencyEntity | null;
  agencies: IAgencyEntity[] | null;

  // methods
  isLoadingItem: (id: ID) => boolean;
  getAgency: (params: IAgencyRequestParams) => Promise<void>;
  editAgency: (params: ICreateOrEditAgencyFormFields) => Promise<void>;
  deleteAgency: (params: IAgencyRequestDeleteParams) => Promise<void>;
  createAgency: (params: ICreateOrEditAgencyFormFields) => Promise<void>;
  searchAgency: (value: string) => void;
  getList: () => Promise<void>;
}
