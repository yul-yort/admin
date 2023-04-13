import { IAgencyRepository, IAgencyRequestEditParams } from "./types";
import {
  IAgencyRequestCreateOrEditParams,
  IAgencyRequestDeleteParams,
  IAgencyRequestParams,
  IAgencyResponseDTO,
} from "../entity/types";
import { EEndpoints } from "../../../common";
import { BaseRepository } from "../../BaseRepository";

export class AgencyRepository
  extends BaseRepository
  implements IAgencyRepository
{
  async getAgency(params: IAgencyRequestParams): Promise<IAgencyResponseDTO> {
    return await this.fetcher.get<IAgencyResponseDTO, IAgencyRequestParams>(
      EEndpoints.AGENCIES,
      {
        param: params.id,
      }
    );
  }

  async editAgency(
    params: IAgencyRequestEditParams
  ): Promise<IAgencyResponseDTO> {
    return await this.fetcher.patch<
      IAgencyResponseDTO,
      IAgencyRequestEditParams
    >(EEndpoints.AGENCIES, {
      body: params,
    });
  }

  async deleteAgency(
    //TODO param - number
    params: IAgencyRequestDeleteParams
  ): Promise<void> {
    await this.fetcher.delete(EEndpoints.AGENCIES, {
      param: params.id,
    });
  }

  async getList(): Promise<IAgencyResponseDTO[]> {
    return await this.fetcher.get<IAgencyResponseDTO[]>(EEndpoints.AGENCIES);
  }

  async createAgency(
    params: IAgencyRequestCreateOrEditParams
  ): Promise<IAgencyResponseDTO> {
    return await this.fetcher.post<
      IAgencyResponseDTO,
      IAgencyRequestCreateOrEditParams
    >(EEndpoints.AGENCIES, { body: params });
  }
}
