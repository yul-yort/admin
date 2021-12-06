import { IServices, IStoreRepositories, IStoreServices } from "./types";
import { AgencyService } from "../data/services/Agency";

export class ServicesStore implements IStoreServices {
  private services: IServices = {};

  get agency() {
    if (this.services.agency) {
      return this.services.agency;
    }

    this.services.agency = new AgencyService(this.repositories.agency);
    return this.services.agency;
  }

  constructor(private repositories: IStoreRepositories) {}
}
