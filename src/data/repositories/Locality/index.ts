import { BaseRepository } from "../BaseRepository";
import { EEndpoints } from "src/constants/Endpoints";
import { ILocalityRepository } from "./types";
import { ILocalityDTO } from "src/data/entities/Locality/types";

export class LocalityRepository
  extends BaseRepository
  implements ILocalityRepository
{
  async getList(): Promise<ILocalityDTO[]> {
    return await this.api.get<ILocalityDTO[]>(EEndpoints.LOCALITY_LIST);
  }
}
