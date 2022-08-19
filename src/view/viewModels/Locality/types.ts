import { IBaseVM } from "../types";
import {
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
  ILocalityEntity,
} from "src/data/Locality/entity";

export interface ILocalityVM extends IBaseVM {
  createOrEditLoading: boolean;
  localities: ILocalityEntity[] | null;
  getList: () => Promise<void>;
  createLocality: (params: ILocalityCreateParamsReq) => Promise<void>;
  editLocality: (params: ILocalityEditParamsReq) => Promise<void>;
}
