import { ILocalityService } from "./types";
import { ILocalityRepository } from "../repository/types";
import {
  ILocalityCreateParamsReq,
  ILocalityEditParamsReq,
  ILocalityEntity,
} from "../entity";
import { Locality } from "../entity";

export class LocalityService implements ILocalityService {
  constructor(private repository: ILocalityRepository) {}

  getList = async (): Promise<ILocalityEntity[]> => {
    const localities = await this.repository.getList();

    return localities.map((locality) => new Locality(locality));
  };

  createLocality = async (
    params: ILocalityCreateParamsReq
  ): Promise<ILocalityEntity[]> => {
    const localities = await this.repository.createLocality(params);

    return localities.map((locality) => new Locality(locality));
  };

  editLocality = async (
    params: ILocalityEditParamsReq
  ): Promise<ILocalityEntity[]> => {
    const localities = await this.repository.editLocality(params);

    return localities.map((locality) => new Locality(locality));
  };

  deleteLocality = async (id: ID): Promise<ILocalityEntity> => {
    const locality = await this.repository.deleteLocality({ id });

    return new Locality(locality);
  };
}
