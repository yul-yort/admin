import { ILocalityService } from "./types";
import { ILocalityRepository } from "../../repositories/Locality/types";
import { ILocalityEntity } from "../../entities/Locality/types";
import { Locality } from "../../entities/Locality";

export class LocalityService implements ILocalityService {
  constructor(private repository: ILocalityRepository) {}

  getList = async (): Promise<ILocalityEntity[]> => {
    const localities = await this.repository.getList();

    return localities.map((locality) => new Locality(locality));
  };
}
