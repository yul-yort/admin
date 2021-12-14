import { IAgencyService } from "./types";
import {
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
}
