import { IRepositories, ILibsContainer, IRepositoriesContainer } from "./types";
import { AgencyRepository } from "../data/Agency/repository";
import { AdminRepository } from "../data/Admin/repository";
import { OrderRepository } from "../data/Order/repository";
import { LocalityRepository } from "../data/Locality/repository";
import { ILocalityRepository } from "../data/Locality/repository/types";
import { IOrderRepository } from "../data/Order/repository/types";
import { IAdminRepository } from "../data/Admin/repository/types";
import { IAgencyRepository } from "../data/Agency/repository/types";

export class RepositoriesContainer implements IRepositoriesContainer {
  private repositories: IRepositories = {};

  destroy() {
    this.repositories = {};
  }

  get agency(): IAgencyRepository {
    if (!this.repositories.agency) {
      this.repositories.agency = new AgencyRepository(this.libs.fetcher);
    }

    return this.repositories.agency;
  }

  get admin(): IAdminRepository {
    if (!this.repositories.admin) {
      this.repositories.admin = new AdminRepository(this.libs.fetcher);
    }

    return this.repositories.admin;
  }

  get order(): IOrderRepository {
    if (!this.repositories.order) {
      this.repositories.order = new OrderRepository(this.libs.fetcher);
    }

    return this.repositories.order;
  }

  get locality(): ILocalityRepository {
    if (!this.repositories.locality) {
      this.repositories.locality = new LocalityRepository(this.libs.fetcher);
    }

    return this.repositories.locality;
  }

  constructor(private libs: ILibsContainer) {}
}
