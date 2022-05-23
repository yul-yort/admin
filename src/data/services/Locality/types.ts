import { ILocalityEntity } from "../../entities/Locality/types";

export interface ILocalityService {
  getList: () => Promise<ILocalityEntity[]>;
}
