import { IRepositories, IStoreLibs, IStoreRepositories } from "./types";
import { AgencyRepository } from "../data/Agency/repository";
import { UserRepository } from "../data/User/repository";
import { OrderRepository } from "../data/Order/repository";
import { LocalityRepository } from "../data/Locality/repository";

export class RepositoriesStore implements IStoreRepositories {
  private repositories: IRepositories = {};

  get agency() {
    if (!this.repositories.agency) {
      this.repositories.agency = new AgencyRepository(this.libs.api);
    }

    return this.repositories.agency;
  }

  get user() {
    if (!this.repositories.user) {
      this.repositories.user = new UserRepository(this.libs.api);
    }

    return this.repositories.user;
  }

  get order() {
    if (!this.repositories.order) {
      this.repositories.order = new OrderRepository(this.libs.api);
    }

    return this.repositories.order;
  }

  get locality() {
    if (!this.repositories.locality) {
      this.repositories.locality = new LocalityRepository(this.libs.api);
    }

    return this.repositories.locality;
  }

  constructor(private libs: IStoreLibs) {}
}
