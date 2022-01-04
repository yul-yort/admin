import { IAgencyService } from "./types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
} from "../../entities/Agency/types";
import { IAgencyRepository } from "../../repositories/Agency/types";
import { Agency } from "../../entities/Agency";

export class AgencyService implements IAgencyService {
  constructor(private repository: IAgencyRepository) {}

  async getAgency(params: IAgencyRequestParams): Promise<IAgencyEntity> {
    const agency = await this.repository.getAgency(params);

    return new Agency(agency);
  }

  async editAgency(params: IAgencyRequestEditParams): Promise<IAgencyEntity> {
    const agency = await this.repository.editAgency(params);

    return new Agency(agency);
  }
}
