import { IAgencyRepository } from "./types";
import {
  IAgencyResponseDTO,
  IAgencyRequestCreateParams,
  IAgencyRequestDeleteParams,
  IAgencyRequestEditParams,
  IAgencyRequestParams,
} from "../entity/types";
import { EEndpoints } from "../../../constants/Endpoints";
import { BaseRepository } from "../../BaseRepository";

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

  async deleteAgency(
    params: IAgencyRequestDeleteParams
  ): Promise<IAgencyResponseDTO> {
    return await this.api.delete<
      IAgencyResponseDTO,
      IAgencyRequestDeleteParams
    >(EEndpoints.AGENCY_DELETE, params);
  }

  async getList(): Promise<IAgencyResponseDTO[]> {
    return await this.api.get<IAgencyResponseDTO[]>(EEndpoints.AGENCY_LIST);
  }

  async createAgency(
    params: IAgencyRequestCreateParams
  ): Promise<IAgencyResponseDTO> {
    return await this.api.post<IAgencyResponseDTO, IAgencyRequestCreateParams>(
      EEndpoints.AGENCY_CREATE,
      params
    );
  }
}
