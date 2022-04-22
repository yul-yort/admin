import { IBaseVM } from "../types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyItemEntity,
} from "../../../data/entities/Agency/types";

export interface IAgencyVM extends IBaseVM {
  agency: IAgencyEntity | null;
  agencies: IAgencyItemEntity[] | null;
  editLoading: boolean;
  loadingList: ID[];

  getAgency: (params: IAgencyRequestParams) => Promise<void>;
  editAgency: (params: IAgencyRequestEditParams) => Promise<void>;
  deleteAgency: (params: IAgencyRequestDeleteParams) => Promise<void>;

  getList: () => Promise<void>;
}
