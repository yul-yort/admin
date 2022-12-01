import { IBaseVM } from "../types";
import {
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
  ILocalityEntity,
} from "src/data/Locality/entity";

export interface ILocalityVM extends IBaseVM {
  createOrEditLoading: boolean;
  searchValue: string;
  localities: ILocalityEntity[] | null;
  searchLocality: (value: string) => void;
  getList: () => Promise<void>;
  createLocality: (params: ILocalityCreateParamsReq) => Promise<void>;
  editLocality: (params: ILocalityEditParamsReq) => Promise<void>;
  deleteLocality: (id: number) => Promise<void>;
}
