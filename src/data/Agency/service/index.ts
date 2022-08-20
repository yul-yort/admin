import { IAgencyService } from "./types";
import {
  IAgencyRequestEditParams,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyEntity,
  IAgencyRequestCreateParams,
} from "../entity/types";
import { IAgencyRepository } from "../repository/types";
import { Agency } from "../entity";
import { VMPhonesRequestFormatter } from "../../../view/UI/components/shared/AgencyCreateEditForm/mappers";
import { ICreateOrEditAgencyFormFields } from "../../../view/UI/components/shared/AgencyCreateEditForm/types";

export class AgencyService implements IAgencyService {
  constructor(private repository: IAgencyRepository) {}

  async getAgency(params: IAgencyRequestParams): Promise<IAgencyEntity> {
    const agency = await this.repository.getAgency(params);

    return new Agency(agency);
  }

  async editAgency(
    fields: ICreateOrEditAgencyFormFields
  ): Promise<IAgencyEntity> {
    const params: IAgencyRequestEditParams = {
      ...fields,
      editedDate: new Date().getTime(),
      phones: VMPhonesRequestFormatter(fields.phones),
    };
    const agency = await this.repository.editAgency(params);

    return new Agency(agency);
  }

  async deleteAgency(
    params: IAgencyRequestDeleteParams
  ): Promise<IAgencyEntity> {
    const agency = await this.repository.deleteAgency(params);

    return new Agency(agency);
  }

  async getList(): Promise<IAgencyEntity[]> {
    const agencies = await this.repository.getList();

    return agencies.map((agency) => new Agency(agency));
  }

  async createAgency(
    fields: ICreateOrEditAgencyFormFields
  ): Promise<IAgencyEntity> {
    const params: IAgencyRequestCreateParams = {
      ...fields,
      createDate: new Date().getTime(),
      phones: VMPhonesRequestFormatter(fields.phones),
    };

    const agencyItem = await this.repository.createAgency(params);

    return new Agency(agencyItem);
  }
}
