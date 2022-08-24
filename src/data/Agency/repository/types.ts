import {
  IAgencyResponseDTO,
  IAgencyRequestCreateOrEditParams,
  IAgencyRequestDeleteParams,
  IAgencyRequestParams,
} from "../entity/types";

export interface IAgencyRequestEditParams
  extends IAgencyRequestCreateOrEditParams {
  id: ID;
}

export interface IAgencyRepository {
  getAgency: (params: IAgencyRequestParams) => Promise<IAgencyResponseDTO>;
  editAgency: (params: IAgencyRequestEditParams) => Promise<IAgencyResponseDTO>;
  deleteAgency: (
    params: IAgencyRequestDeleteParams
  ) => Promise<IAgencyResponseDTO>;
  getList: () => Promise<IAgencyResponseDTO[]>;
  createAgency: (
    params: IAgencyRequestCreateOrEditParams
  ) => Promise<IAgencyResponseDTO>;
}
