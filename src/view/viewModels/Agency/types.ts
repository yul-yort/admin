import { IBaseVM } from "../types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
} from "../../../data/entities/Agency/types";

export interface IAgencyVM extends IBaseVM {
  agency: IAgencyEntity | null;
  editLoading: boolean;

  getAgency: (params: IAgencyRequestParams) => Promise<void>;
  editAgency: (params: IAgencyRequestEditParams) => Promise<void>;
  deleteAgency: (params: IAgencyRequestDeleteParams) => Promise<void>;
}
