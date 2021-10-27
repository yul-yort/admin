import { IBaseVM } from "../types";
import {
  IAgencyDomain,
  IAgencyRequestParams,
} from "../../../data/domainModels/Agency/types";

export interface IAgencyVM extends IBaseVM {
  agency: IAgencyDomain | null;

  getAgency: (params: IAgencyRequestParams) => Promise<void>;
}
