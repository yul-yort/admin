import { ILocalityService } from "./types";
import { ILocalityRepository } from "../repository/types";
import { ILocalityEntity } from "../entity/types";
import { Locality } from "../entity";

export class LocalityService implements ILocalityService {
  constructor(private repository: ILocalityRepository) {}

  getList = async (): Promise<ILocalityEntity[]> => {
    const localities = await this.repository.getList();

    return localities.map((locality) => new Locality(locality));
  };
}
