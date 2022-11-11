import { IStoreServices, IStoreViewModels, IViewModels } from "./types";
import { AgencyVM } from "../view/viewModels/Agency";
import { UserVM } from "../view/viewModels/User";
import { NotificationsVM } from "../view/viewModels/NotificationsVM";
import { OrderVM } from "../view/viewModels/Order";
import { LocalityVM } from "../view/viewModels/Locality";
import { IAgencyVM } from "../view/viewModels/Agency/types";
import { INotificationsVM } from "../view/viewModels/types";
import { IUserVM } from "../view/viewModels/User/types";
import { IOrderVM } from "../view/viewModels/Order/types";
import { ILocalityVM } from "../view/viewModels/Locality/types";
import { IAppVM } from "../view/viewModels/App/types";
import { AppVM } from "../view/viewModels/App";

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

  get user(): IUserVM {
    if (!this.store.user) {
      this.store.user = new UserVM(this.notifications, this.services.user);
    }

    return this.store.user;
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

  constructor(private services: IStoreServices) {}

  get app(): IAppVM {
    if (!this.store.app) {
      this.store.app = new AppVM(this.notifications);
    }

    return this.store.app;
  }
}
