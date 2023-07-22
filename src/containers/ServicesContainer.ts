import { IServices, IRepositoriesContainer, IServicesContainer } from "./types";
import { AgencyService } from "../data/Agency/service";
import { OrderService } from "../data/Order/service";
import { LocalityService } from "../data/Locality/service";
import { AdminService } from "../data/Admin/service";
import { IAgencyService } from "../data/Agency/service/types";
import { IAdminService } from "../data/Admin/service/types";
import { IOrderService } from "../data/Order/service/types";
import { ILocalityService } from "../data/Locality/service/types";

export class ServicesContainer implements IServicesContainer {
  private services: IServices = {};
  destroy() {
    this.services = {};
  }

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

  constructor(private repositories: IRepositoriesContainer) {}
}
