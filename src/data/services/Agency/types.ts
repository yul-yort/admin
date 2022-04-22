import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyItemEntity,
} from "../../entities/Agency/types";

export interface IAgencyService {
  getAgency(params: IAgencyRequestParams): Promise<IAgencyEntity>;
  editAgency(params: IAgencyRequestEditParams): Promise<IAgencyEntity>;
  deleteAgency(params: IAgencyRequestDeleteParams): Promise<IAgencyEntity>;

  getList(): Promise<IAgencyItemEntity[]>;
}
