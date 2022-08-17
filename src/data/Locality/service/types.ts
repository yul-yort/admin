import {
  ILocalityCreateParamsReq,
  ILocalityDTO,
  ILocalityEditParamsReq,
  ILocalityEntity,
} from "../entity";

export interface ILocalityService {
  getList: () => Promise<ILocalityEntity[]>;
  createLocality: (params: ILocalityCreateParamsReq) => Promise<ILocalityDTO[]>;
  editLocality: (params: ILocalityEditParamsReq) => Promise<ILocalityDTO[]>;
}
