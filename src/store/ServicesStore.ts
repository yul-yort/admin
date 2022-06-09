import { IServices, IStoreRepositories, IStoreServices } from "./types";
import { AgencyService } from "../data/Agency/service";
import { OrderService } from "../data/Order/service";
import { LocalityService } from "../data/Locality/service";
import { UserService } from "../data/User/service";

export class ServicesStore implements IStoreServices {
  private services: IServices = {};

  get agency() {
    if (!this.services.agency) {
      this.services.agency = new AgencyService(this.repositories.agency);
    }

    return this.services.agency;
  }

  get user() {
    if (!this.services.user) {
      this.services.user = new UserService(this.repositories.user);
    }

    return this.services.user;
  }

  get order() {
    if (!this.services.order) {
      this.services.order = new OrderService(this.repositories.order);
    }

    return this.services.order;
  }

  get locality() {
    if (!this.services.locality) {
      this.services.locality = new LocalityService(this.repositories.locality);
    }

    return this.services.locality;
  }

  constructor(private repositories: IStoreRepositories) {}
}
