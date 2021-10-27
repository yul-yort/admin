import { IAgencyService } from "./types";
import {
  IAgencyDomain,
  IAgencyRequestParams,
} from "../../domainModels/Agency/types";
import { IAgencyRepository } from "../../repositories/Agency/types";
import { AgencyDomain } from "../../domainModels/Agency";

export class AgencyService implements IAgencyService {
  constructor(private repository: IAgencyRepository) {}

  async getAgency(params: IAgencyRequestParams): Promise<IAgencyDomain> {
    const agency = await this.repository.getAgency(params);

    return new AgencyDomain(agency);
  }
}
