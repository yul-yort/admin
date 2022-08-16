import {
  ILocalityCreateParamsReq,
  ILocalityDTO,
  ILocalityEntity,
} from "../entity";

export interface ILocalityService {
  getList: () => Promise<ILocalityEntity[]>;
  createLocality: (params: ILocalityCreateParamsReq) => Promise<ILocalityDTO[]>;
}
