import {
  IAgencyRequestParams,
  IAgencyResponseDTO,
} from "../../domainModels/Agency/types";

export interface IAgencyRepository {
  getAgency: (params: IAgencyRequestParams) => Promise<IAgencyResponseDTO>;
}
