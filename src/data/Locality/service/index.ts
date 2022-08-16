import { ILocalityService } from "./types";
import { ILocalityRepository } from "../repository/types";
import { ILocalityCreateParamsReq, ILocalityEntity } from "../entity";
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
}
