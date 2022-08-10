import { IRepositories, IStoreLibs, IStoreRepositories } from "./types";
import { AgencyRepository } from "../data/Agency/repository";
import { UserRepository } from "../data/User/repository";
import { OrderRepository } from "../data/Order/repository";
import { LocalityRepository } from "../data/Locality/repository";
import { ILocalityRepository } from "../data/Locality/repository/types";
import { IOrderRepository } from "../data/Order/repository/types";
import { IUserRepository } from "../data/User/repository/types";
import { IAgencyRepository } from "../data/Agency/repository/types";

export class RepositoriesStore implements IStoreRepositories {
  private repositories: IRepositories = {};

  get agency(): IAgencyRepository {
    if (!this.repositories.agency) {
      this.repositories.agency = new AgencyRepository(this.libs.api);
    }

    return this.repositories.agency;
  }

  get user(): IUserRepository {
    if (!this.repositories.user) {
      this.repositories.user = new UserRepository(this.libs.api);
    }

    return this.repositories.user;
  }

  get order(): IOrderRepository {
    if (!this.repositories.order) {
      this.repositories.order = new OrderRepository(this.libs.api);
    }

    return this.repositories.order;
  }

  get locality(): ILocalityRepository {
    if (!this.repositories.locality) {
      this.repositories.locality = new LocalityRepository(this.libs.api);
    }

    return this.repositories.locality;
  }

  constructor(private libs: IStoreLibs) {}
}
