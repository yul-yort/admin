import { IBaseVM } from "../types";
import {
  ILocalityCreateParamsReq,
  ILocalityEntity,
} from "src/data/Locality/entity";

export interface ILocalityVM extends IBaseVM {
  createOrEditLoading: boolean;
  localities: ILocalityEntity[] | null;
  getList: () => Promise<void>;
  createLocality: (params: ILocalityCreateParamsReq) => Promise<void>;
}
