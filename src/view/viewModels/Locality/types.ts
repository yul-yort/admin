import { IBaseVM } from "../types";
import { ILocalityEntity } from "../../../data/entities/Locality/types";

export interface ILocalityVM extends IBaseVM {
  localities: ILocalityEntity[] | null;
  getList: () => Promise<void>;
}
