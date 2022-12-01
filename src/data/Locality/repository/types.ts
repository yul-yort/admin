import {
  ILocalityDTO,
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
  ILocalityDeleteParamsReq,
} from "src/data/Locality/entity/types";

export interface ILocalityRepository {
  getList: () => Promise<ILocalityDTO[]>;
  createLocality: (params: ILocalityCreateParamsReq) => Promise<ILocalityDTO>;
  editLocality: (params: ILocalityEditParamsReq) => Promise<ILocalityDTO>;
  deleteLocality: (params: ILocalityDeleteParamsReq) => Promise<void>;
}
