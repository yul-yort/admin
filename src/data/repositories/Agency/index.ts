import { IAgencyRepository } from "./types";
import {
  IAgencyRequestEditParams,
  IAgencyRequestParams,
  IAgencyResponseDTO,
} from "../../entities/Agency/types";
import { EEndpoints } from "../../../constants/Endpoints";
import { BaseRepository } from "../BaseRepository";

export class AgencyRepository
  extends BaseRepository
  implements IAgencyRepository
{
  async getAgency(params: IAgencyRequestParams): Promise<IAgencyResponseDTO> {
    return await this.api.get<IAgencyResponseDTO, IAgencyRequestParams>(
      EEndpoints.AGENCY,
      params
    );
  }

  async editAgency(
    params: IAgencyRequestEditParams
  ): Promise<IAgencyResponseDTO> {
    return await this.api.post<IAgencyResponseDTO, IAgencyRequestEditParams>(
      EEndpoints.AGENCY_EDIT,
      params
    );
  }
}
