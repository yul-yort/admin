import {
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyEntity,
} from "../entity/types";
import { ICreateOrEditAgencyFormFields } from "../../../view/UI/components/shared";

export interface IAgencyService {
  getAgency(params: IAgencyRequestParams): Promise<IAgencyEntity>;
  editAgency(
    id: number,
    params: ICreateOrEditAgencyFormFields
  ): Promise<IAgencyEntity>;
  deleteAgency(params: IAgencyRequestDeleteParams): Promise<void>;

  getList(): Promise<IAgencyEntity[]>;

  createAgency(fields: ICreateOrEditAgencyFormFields): Promise<IAgencyEntity>;
}
