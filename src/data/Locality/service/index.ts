import { ILocalityService } from "./types";
import { ILocalityRepository } from "../repository/types";
import {
  Locality,
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
  ILocalityEntity,
} from "../entity";

export class LocalityService implements ILocalityService {
  constructor(private repository: ILocalityRepository) {}

  getList = async (): Promise<ILocalityEntity[]> => {
    const localities = await this.repository.getList();

    return localities.map((locality) => new Locality(locality));
  };

  createLocality = async (
    params: ILocalityCreateParamsReq
  ): Promise<ILocalityEntity> => {
    const locality = await this.repository.createLocality(params);

    return new Locality(locality);
  };

  editLocality = async (
    params: ILocalityEditParamsReq
  ): Promise<ILocalityEntity> => {
    const locality = await this.repository.editLocality(params);

    return new Locality(locality);
  };

  deleteLocality = async (id: number): Promise<void> => {
    await this.repository.deleteLocality({ id });
  };
}
