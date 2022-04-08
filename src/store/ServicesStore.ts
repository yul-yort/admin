import { IServices, IStoreRepositories, IStoreServices } from "./types";
import { AgencyService } from "../data/services/Agency";
import { UserService } from "../data/services/User";

export class ServicesStore implements IStoreServices {
  private services: IServices = {};

  get agency() {
    if (this.services.agency) {
      return this.services.agency;
    }

    this.services.agency = new AgencyService(this.repositories.agency);
    return this.services.agency;
  }

  get user() {
    if (this.services.user) {
      return this.services.user;
    }

    this.services.user = new UserService(this.repositories.user);
    return this.services.user;
  }

  constructor(private repositories: IStoreRepositories) {}
}
