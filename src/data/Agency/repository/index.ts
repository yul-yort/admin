import { IAgencyRepository, IAgencyRequestEditParams } from "./types";
import {
  IAgencyResponseDTO,
  IAgencyRequestCreateOrEditParams,
  IAgencyRequestDeleteParams,
  IAgencyRequestParams,
} from "../entity/types";
import { EEndpoints } from "../../../constants";
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
      EEndpoints.AGENCY_UPDATE,
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
    params: IAgencyRequestCreateOrEditParams
  ): Promise<IAgencyResponseDTO> {
    return await this.api.post<
      IAgencyResponseDTO,
      IAgencyRequestCreateOrEditParams
    >(EEndpoints.AGENCY_CREATE, params);
  }
}
