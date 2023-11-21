import { IRepositories, IStoreLibs, IStoreRepositories } from "./types";
import { AgencyRepository } from "../data/Agency/repository";
import { AdminRepository } from "../data/Admin/repository";
import { OrderRepository } from "../data/Order/repository";
import { LocalityRepository } from "../data/Locality/repository";
import { ILocalityRepository } from "../data/Locality/repository/types";
import { IOrderRepository } from "../data/Order/repository/types";
import { IAdminRepository } from "../data/Admin/repository/types";
import { IAgencyRepository } from "../data/Agency/repository/types";
import { AuthRepository } from "src/data/Auth/repository";
import { IAuthRepository } from "src/data/Auth/repository/types";

export class RepositoriesStore implements IStoreRepositories {
  private repositories: IRepositories = {};

  get agency(): IAgencyRepository {
    if (!this.repositories.agency) {
      this.repositories.agency = new AgencyRepository(this.libs.api);
    }

    return this.repositories.agency;
  }

  get admin(): IAdminRepository {
    if (!this.repositories.admin) {
      this.repositories.admin = new AdminRepository(this.libs.api);
    }

    return this.repositories.admin;
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

  get auth(): IAuthRepository {
    if (!this.repositories.auth) {
      this.repositories.auth = new AuthRepository(this.libs.api);
    }

    return this.repositories.auth;
  }

  constructor(private libs: IStoreLibs) {}
}
