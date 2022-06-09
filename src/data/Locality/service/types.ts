import { ILocalityEntity } from "../entity/types";

export interface ILocalityService {
  getList: () => Promise<ILocalityEntity[]>;
}
