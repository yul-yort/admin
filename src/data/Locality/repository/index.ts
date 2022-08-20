import { BaseRepository } from "../../BaseRepository";
import { EEndpoints } from "src/constants/endpoints";
import { ILocalityRepository } from "./types";
import {
  ILocalityDTO,
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
} from "src/data/Locality/entity/types";

export class LocalityRepository
  extends BaseRepository
  implements ILocalityRepository
{
  async getList(): Promise<ILocalityDTO[]> {
    return await this.api.get<ILocalityDTO[]>(EEndpoints.LOCALITY_LIST);
  }

  async createLocality(
    params: ILocalityCreateParamsReq
  ): Promise<ILocalityDTO[]> {
    return await this.api.post<ILocalityDTO[], ILocalityCreateParamsReq>(
      EEndpoints.LOCALITY_CREATE,
      params
    );
  }

  async editLocality(params: ILocalityEditParamsReq): Promise<ILocalityDTO[]> {
    return await this.api.post<ILocalityDTO[], ILocalityEditParamsReq>(
      EEndpoints.LOCALITY_EDIT,
      params
    );
  }

  async deleteLocality(id: ID): Promise<ILocalityDTO[]> {
    return await this.api.delete<ILocalityDTO[], ID>(
      EEndpoints.LOCALITY_DELETE,
      id
    );
  }
}
