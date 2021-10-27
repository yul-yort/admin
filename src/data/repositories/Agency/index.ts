import { IAgencyRepository } from "./types";
import {
  IAgencyRequestParams,
  IAgencyResponseDTO,
} from "../../domainModels/Agency/types";
import { EEndpoints } from "../../../constants/Endpoints";
import { BaseRepository } from "../BaseRepository";

export class AgencyRepository
  extends BaseRepository
  implements IAgencyRepository
{
  async getAgency(params: IAgencyRequestParams): Promise<IAgencyResponseDTO> {
    return await this.api.get<IAgencyResponseDTO, IAgencyRequestParams>(
      EEndpoints.agency,
      params
    );
  }
}
