import { BaseRepository } from "../../BaseRepository";
import { EEndpoints } from "src/common/endpoints";
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
    return await this.api.get<ILocalityDTO[]>(EEndpoints.LOCALITIES);
  }

  async createLocality(
    params: ILocalityCreateParamsReq
  ): Promise<ILocalityDTO> {
    return await this.api.post<ILocalityDTO, ILocalityCreateParamsReq>(
      EEndpoints.LOCALITIES,
      {
        body: params,
      }
    );
  }

  async editLocality(params: ILocalityEditParamsReq): Promise<ILocalityDTO> {
    return await this.api.patch<ILocalityDTO, ILocalityEditParamsReq>(
      EEndpoints.LOCALITIES,
      {
        body: params,
      }
    );
  }

  async deleteLocality(
    //TODO param - number
    params: ILocalityDeleteParamsReq
  ): Promise<void> {
    await this.api.delete(EEndpoints.LOCALITIES, {
      param: params.id,
    });
  }
}
