import { IBaseVM } from "../types";
import {
  IAgencyEntity,
  IAgencyRequestParams,
} from "../../../data/entities/Agency/types";

export interface IAgencyVM extends IBaseVM {
  agency: IAgencyEntity | null;

  getAgency: (params: IAgencyRequestParams) => Promise<void>;
}
