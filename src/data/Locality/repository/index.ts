import { BaseRepository } from "../../BaseRepository";
import { EEndpoints } from "src/constants/endpoints";
import { ILocalityRepository } from "./types";
import {
  ILocalityDTO,
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
  ILocalityDeleteParamsReq,
} from "src/data/Locality/entity/types";

export class LocalityRepository
  extends BaseRepository
  implements ILocalityRepository
{
  async getList(): Promise<ILocalityDTO[]> {
    return await this.api.get<ILocalityDTO[]>({
      endpoint: EEndpoints.LOCALITIES,
    });
  }

  async createLocality(
    params: ILocalityCreateParamsReq
  ): Promise<ILocalityDTO> {
    return await this.api.post<ILocalityDTO, ILocalityCreateParamsReq>({
      endpoint: EEndpoints.LOCALITIES,
      body: params,
    });
  }

  async editLocality(params: ILocalityEditParamsReq): Promise<ILocalityDTO> {
    return await this.api.patch<ILocalityDTO, ILocalityEditParamsReq>({
      endpoint: EEndpoints.LOCALITIES,
      body: params,
    });
  }

  async deleteLocality(
    //TODO param - number
    params: ILocalityDeleteParamsReq
  ): Promise<void> {
    await this.api.delete({
      endpoint: EEndpoints.LOCALITIES,
      param: params.id,
    });
  }
}
