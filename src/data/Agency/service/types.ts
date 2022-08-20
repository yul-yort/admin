import {
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyEntity,
} from "../entity/types";
import { ICreateOrEditAgencyFormFields } from "../../../view/UI/components/shared/AgencyCreateEditForm/types";

export interface IAgencyService {
  getAgency(params: IAgencyRequestParams): Promise<IAgencyEntity>;
  editAgency(params: ICreateOrEditAgencyFormFields): Promise<IAgencyEntity>;
  deleteAgency(params: IAgencyRequestDeleteParams): Promise<IAgencyEntity>;

  getList(): Promise<IAgencyEntity[]>;

  createAgency(fields: ICreateOrEditAgencyFormFields): Promise<IAgencyEntity>;
}
