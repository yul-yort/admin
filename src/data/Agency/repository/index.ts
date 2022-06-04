import { IAgencyRepository } from "./types";
import {
  IAgencyItemResponseDTO,
  IAgencyRequestCreateParams,
  IAgencyRequestDeleteParams,
  IAgencyRequestEditParams,
  IAgencyRequestParams,
  IAgencyResponseDTO,
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

  async getList(): Promise<IAgencyItemResponseDTO[]> {
    return await this.api.get<IAgencyItemResponseDTO[]>(EEndpoints.AGENCY_LIST);
  }

  async createAgency(
    params: IAgencyRequestCreateParams
  ): Promise<IAgencyItemResponseDTO> {
    return await this.api.post<
      IAgencyItemResponseDTO,
      IAgencyRequestCreateParams
    >(EEndpoints.AGENCY_CREATE, params);
  }
}
