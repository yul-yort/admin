import { IAgencyService } from "./types";
import {
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyEntity,
  IAgencyRequestCreateOrEditParams,
} from "../entity/types";
import {
  IAgencyRepository,
  IAgencyRequestEditParams,
} from "../repository/types";
import { Agency } from "../entity";
import {
  ICreateOrEditAgencyFormFields,
  VMPhonesRequestFormatter,
} from "src/view/UI/components/shared";

export class AgencyService implements IAgencyService {
  constructor(private repository: IAgencyRepository) {}

  async getAgency(params: IAgencyRequestParams): Promise<IAgencyEntity> {
    const agency = await this.repository.getAgency(params);

    return new Agency(agency);
  }

  async editAgency(
    id: ID,
    fields: ICreateOrEditAgencyFormFields
  ): Promise<IAgencyEntity> {
    const params: IAgencyRequestEditParams = {
      ...fields,
      id,
      phones: VMPhonesRequestFormatter(fields.phones),
    };

    const agency = await this.repository.editAgency(params);

    return new Agency(agency);
  }

  async deleteAgency(params: IAgencyRequestDeleteParams): Promise<void> {
    await this.repository.deleteAgency(params);
  }

  async getList(): Promise<IAgencyEntity[]> {
    const agencies = await this.repository.getList();

    return agencies.map((agency) => new Agency(agency));
  }

  async createAgency(
    fields: ICreateOrEditAgencyFormFields
  ): Promise<IAgencyEntity> {
    const params: IAgencyRequestCreateOrEditParams = {
      ...fields,
      phones: VMPhonesRequestFormatter(fields.phones),
    };

    const agencyItem = await this.repository.createAgency(params);

    return new Agency(agencyItem);
  }
}
