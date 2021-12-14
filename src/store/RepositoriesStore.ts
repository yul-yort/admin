import { IRepositories, IStoreLibs, IStoreRepositories } from "./types";
import { AgencyRepository } from "../data/repositories/Agency";

export class RepositoriesStore implements IStoreRepositories {
  private repositories: IRepositories = {};

  get agency() {
    if (this.repositories.agency) {
      return this.repositories.agency;
    }

    this.repositories.agency = new AgencyRepository(this.libs.api);
    return this.repositories.agency;
  }

  constructor(private libs: IStoreLibs) {}
}
