import { IServicesContainer, IViewModelsContainer, IViewModels } from "./types";
import { AgencyVM } from "../view/viewModels/Agency";
import { AdminVM } from "../view/viewModels/Admin";
import { NotificationsVM } from "../view/viewModels/NotificationsVM";
import { OrderVM } from "../view/viewModels/Order";
import { LocalityVM } from "../view/viewModels/Locality";
import { IAgencyVM } from "../view/viewModels/Agency/types";
import { INotificationsVM } from "../view/viewModels/types";
import { IAdminVM } from "../view/viewModels/Admin/types";
import { IOrderVM } from "../view/viewModels/Order/types";
import { ILocalityVM } from "../view/viewModels/Locality/types";
import { IAppVM } from "../view/viewModels/App/types";
import { AppVM } from "../view/viewModels/App";

export class ViewModelsContainer implements IViewModelsContainer {
  private viewModels: IViewModels = {};

  destroy() {
    this.viewModels = {};
  }

  get notifications(): INotificationsVM {
    if (!this.viewModels.notifications) {
      this.viewModels.notifications = new NotificationsVM();
    }

    return this.viewModels.notifications;
  }

  get agency(): IAgencyVM {
    if (!this.viewModels.agency) {
      this.viewModels.agency = new AgencyVM(
        this.notifications,
        this.services.agency
      );
    }

    return this.viewModels.agency;
  }

  get admin(): IAdminVM {
    if (!this.viewModels.admin) {
      this.viewModels.admin = new AdminVM(
        this.notifications,
        this.services.admin
      );
    }

    return this.viewModels.admin;
  }

  get order(): IOrderVM {
    if (!this.viewModels.order) {
      this.viewModels.order = new OrderVM(
        this.notifications,
        this.services.order
      );
    }

    return this.viewModels.order;
  }

  get locality(): ILocalityVM {
    if (!this.viewModels.locality) {
      this.viewModels.locality = new LocalityVM(
        this.notifications,
        this.services.locality
      );
    }

    return this.viewModels.locality;
  }

  get app(): IAppVM {
    if (!this.viewModels.app) {
      this.viewModels.app = new AppVM(this.notifications);
    }

    return this.viewModels.app;
  }

  constructor(private services: IServicesContainer) {}
}
