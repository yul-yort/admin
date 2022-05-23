import { ILocalityDTO } from "src/data/entities/Locality/types";

export interface ILocalityRepository {
  getList: () => Promise<ILocalityDTO[]>;
}
