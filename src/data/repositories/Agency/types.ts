import {
  IAgencyItemResponseDTO,
  IAgencyRequestCreateParams,
  IAgencyRequestDeleteParams,
  IAgencyRequestEditParams,
  IAgencyRequestParams,
  IAgencyResponseDTO,
} from "../../entities/Agency/types";

export interface IAgencyRepository {
  getAgency: (params: IAgencyRequestParams) => Promise<IAgencyResponseDTO>;
  editAgency: (params: IAgencyRequestEditParams) => Promise<IAgencyResponseDTO>;
  deleteAgency: (
    params: IAgencyRequestDeleteParams
  ) => Promise<IAgencyResponseDTO>;

  getList: () => Promise<IAgencyItemResponseDTO[]>;

  createAgency: (
    params: IAgencyRequestCreateParams
  ) => Promise<IAgencyItemResponseDTO>;
}
