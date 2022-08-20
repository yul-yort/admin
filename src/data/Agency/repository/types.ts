import {
  IAgencyResponseDTO,
  IAgencyRequestCreateParams,
  IAgencyRequestDeleteParams,
  IAgencyRequestEditParams,
  IAgencyRequestParams,
} from "../entity/types";

export interface IAgencyRepository {
  getAgency: (params: IAgencyRequestParams) => Promise<IAgencyResponseDTO>;
  editAgency: (params: IAgencyRequestEditParams) => Promise<IAgencyResponseDTO>;
  deleteAgency: (
    params: IAgencyRequestDeleteParams
  ) => Promise<IAgencyResponseDTO>;

  getList: () => Promise<IAgencyResponseDTO[]>;

  createAgency: (
    params: IAgencyRequestCreateParams
  ) => Promise<IAgencyResponseDTO>;
}
