import { IServices, IStoreRepositories, IStoreServices } from "./types";
import { AgencyService } from "../data/Agency/service";
import { OrderService } from "../data/Order/service";
import { LocalityService } from "../data/Locality/service";
import { UserService } from "../data/User/service";
import { IAgencyService } from "../data/Agency/service/types";
import { IUserService } from "../data/User/service/types";
import { IOrderService } from "../data/Order/service/types";
import { ILocalityService } from "../data/Locality/service/types";

export class ServicesStore implements IStoreServices {
  private services: IServices = {};

  get agency(): IAgencyService {
    if (!this.services.agency) {
      this.services.agency = new AgencyService(this.repositories.agency);
    }

    return this.services.agency;
  }

  get user(): IUserService {
    if (!this.services.user) {
      this.services.user = new UserService(this.repositories.user);
    }

    return this.services.user;
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

  constructor(private repositories: IStoreRepositories) {}
}
