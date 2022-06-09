import { IBaseVM } from "../types";
import { ILocalityEntity } from "../../../data/Locality/entity/types";

export interface ILocalityVM extends IBaseVM {
  localities: ILocalityEntity[] | null;
  getList: () => Promise<void>;
}
