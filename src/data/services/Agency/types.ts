import {
  IAgencyEntity,
  IAgencyRequestParams,
} from "../../entities/Agency/types";

export interface IAgencyService {
  getAgency(params: IAgencyRequestParams): Promise<IAgencyEntity>;
}
