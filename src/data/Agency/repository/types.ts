import {
  IAgencyItemResponseDTO,
  IAgencyRequestCreateParams,
  IAgencyRequestDeleteParams,
  IAgencyRequestEditParams,
  IAgencyRequestParams,
  IAgencyResponseDTO,
} from "../entity/types";

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
