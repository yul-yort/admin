import {
  IAgencyRequestParams,
  IAgencyResponseDTO,
} from "../../entities/Agency/types";

export interface IAgencyRepository {
  getAgency: (params: IAgencyRequestParams) => Promise<IAgencyResponseDTO>;
}
