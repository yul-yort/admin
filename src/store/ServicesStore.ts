import { IServices, IStoreRepositories, IStoreServices } from "./types";
import { AgencyService } from "../data/Agency/service";
import { OrderService } from "../data/Order/service";
import { LocalityService } from "../data/Locality/service";
import { AdminService } from "../data/Admin/service";
import { IAgencyService } from "../data/Agency/service/types";
import { IAdminService } from "../data/Admin/service/types";
import { IOrderService } from "../data/Order/service/types";
import { ILocalityService } from "../data/Locality/service/types";
import { AuthService } from "src/data/Auth/service";
import { IAuthService } from "src/data/Auth/service/types";

export class ServicesStore implements IStoreServices {
  private services: IServices = {};

  get agency(): IAgencyService {
    if (!this.services.agency) {
      this.services.agency = new AgencyService(this.repositories.agency);
    }

    return this.services.agency;
  }

  get admin(): IAdminService {
    if (!this.services.admin) {
      this.services.admin = new AdminService(this.repositories.admin);
    }

    return this.services.admin;
  }

  get order(): IOrderService {
    if (!this.services.order) {
      this.services.order = new OrderService(this.repositories.order);
    }

    return this.services.order;
  }

  get locality(): ILocalityService {
    if (!this.services.locality) {
      this.services.locality = new LocalityService(this.repositories.locality);
    }

    return this.services.locality;
  }

  get auth(): IAuthService {
    if (!this.services.auth) {
      this.services.auth = new AuthService(this.repositories.auth);
    }

    return this.services.auth;
  }

  constructor(private repositories: IStoreRepositories) {}
}
