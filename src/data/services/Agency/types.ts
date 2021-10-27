import {
  IAgencyDomain,
  IAgencyRequestParams,
} from "../../domainModels/Agency/types";

export interface IAgencyService {
  getAgency(params: IAgencyRequestParams): Promise<IAgencyDomain>;
}
