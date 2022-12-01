import {
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
  ILocalityEntity,
} from "../entity";

export interface ILocalityService {
  getList: () => Promise<ILocalityEntity[]>;
  createLocality: (
    params: ILocalityCreateParamsReq
  ) => Promise<ILocalityEntity>;
  editLocality: (params: ILocalityEditParamsReq) => Promise<ILocalityEntity>;
  deleteLocality: (id: number) => Promise<void>;
}
