import {
  ILocalityDTO,
  ILocalityCreateParamsReq,
} from "src/data/Locality/entity/types";

export interface ILocalityRepository {
  getList: () => Promise<ILocalityDTO[]>;
  createLocality: (params: ILocalityCreateParamsReq) => Promise<ILocalityDTO[]>;
}
