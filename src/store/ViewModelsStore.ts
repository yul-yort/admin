import { IStoreServices, IStoreViewModels, IViewModels } from "./types";
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
import { IAuthVM } from "src/view/viewModels/AuthVM/types";
import { AuthVM } from "src/view/viewModels/AuthVM";

export class ViewModelsStore implements IStoreViewModels {
  private store: IViewModels = {};

  get notifications(): INotificationsVM {
    if (!this.store.notifications) {
      this.store.notifications = new NotificationsVM();
    }

    return this.store.notifications;
  }

  get agency(): IAgencyVM {
    if (!this.store.agency) {
      this.store.agency = new AgencyVM(
        this.notifications,
        this.services.agency
      );
    }

    return this.store.agency;
  }

  get admin(): IAdminVM {
    if (!this.store.admin) {
      this.store.admin = new AdminVM(this.notifications, this.services.admin);
    }

    return this.store.admin;
  }

  get order(): IOrderVM {
    if (!this.store.order) {
      this.store.order = new OrderVM(this.notifications, this.services.order);
    }

    return this.store.order;
  }

  get locality(): ILocalityVM {
    if (!this.store.locality) {
      this.store.locality = new LocalityVM(
        this.notifications,
        this.services.locality
      );
    }

    return this.store.locality;
  }

  get app(): IAppVM {
    if (!this.store.app) {
      this.store.app = new AppVM(this.notifications);
    }

    return this.store.app;
  }

  get auth(): IAuthVM {
    if (!this.store.auth) {
      this.store.auth = new AuthVM(this.notifications, this.services.auth);
    }

    return this.store.auth;
  }

  constructor(private services: IStoreServices) {}
}
