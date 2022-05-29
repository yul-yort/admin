import { IAgencyService } from "./types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyItemEntity,
  IAgencyRequestCreateParams,
} from "../../entities/Agency/types";
import { IAgencyRepository } from "../../repositories/Agency/types";
import { Agency, AgencyItem } from "../../entities/Agency";
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

  async getList(): Promise<IAgencyItemEntity[]> {
    const agencies = await this.repository.getList();

    return agencies.map((agency) => new AgencyItem(agency));
  }

  async createAgency(
    fields: ICreateOrEditAgencyFormFields
  ): Promise<IAgencyEntity> {
    // TODO Создавать такие DTO-шки?
    // https://github.com/nestjs/nest/blob/master/sample/06-mongoose/src/cats/dto/create-cat.dto.ts
    const params: IAgencyRequestCreateParams = {
      ...fields,
      createDate: new Date().getTime(),
      phones: VMPhonesRequestFormatter(fields.phones),
    };

    const agencyItem = await this.repository.createAgency(params);

    return new AgencyItem(agencyItem);
  }
}
