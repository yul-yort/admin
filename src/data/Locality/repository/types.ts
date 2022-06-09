import { ILocalityDTO } from "src/data/Locality/entity/types";

export interface ILocalityRepository {
  getList: () => Promise<ILocalityDTO[]>;
}
