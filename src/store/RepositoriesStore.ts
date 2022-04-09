import { IRepositories, IStoreLibs, IStoreRepositories } from "./types";
import { AgencyRepository } from "../data/repositories/Agency";
import { UserRepository } from "../data/repositories/User";

export class RepositoriesStore implements IStoreRepositories {
  private repositories: IRepositories = {};

  get agency() {
    if (this.repositories.agency) {
      return this.repositories.agency;
    }

    this.repositories.agency = new AgencyRepository(this.libs.api);
    return this.repositories.agency;
  }

  get user() {
    if (this.repositories.user) {
      return this.repositories.user;
    }

    this.repositories.user = new UserRepository(this.libs.api);
    return this.repositories.user;
  }

  constructor(private libs: IStoreLibs) {}
}
