import { BaseRepository } from "../../BaseRepository";
import { EEndpoints } from "src/constants/Endpoints";
import { ILocalityRepository } from "./types";
import {
  ILocalityDTO,
  ILocalityCreateParamsReq,
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
}
