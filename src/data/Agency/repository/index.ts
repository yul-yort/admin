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
    return await this.execute<IAgencyResponseDTO, IAgencyRequestParams>(
      "get",
      EEndpoints.AGENCIES,
      {
        param: params.id,
      }
    );
  }

  async editAgency(
    params: IAgencyRequestEditParams
  ): Promise<IAgencyResponseDTO> {
    return await this.execute<IAgencyResponseDTO, IAgencyRequestEditParams>(
      "patch",
      EEndpoints.AGENCIES,
      {
        body: params,
      }
    );
  }

  async deleteAgency(
    //TODO param - number
    params: IAgencyRequestDeleteParams
  ): Promise<void> {
    await this.execute("delete", EEndpoints.AGENCIES, {
      param: params.id,
    });
  }

  async getList(): Promise<IAgencyResponseDTO[]> {
    return await this.execute<IAgencyResponseDTO[]>("get", EEndpoints.AGENCIES);
  }

  async createAgency(
    params: IAgencyRequestCreateOrEditParams
  ): Promise<IAgencyResponseDTO> {
    return await this.execute<
      IAgencyResponseDTO,
      IAgencyRequestCreateOrEditParams
    >("post", EEndpoints.AGENCIES, { body: params });
  }
}
