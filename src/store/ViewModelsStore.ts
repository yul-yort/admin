import { IStoreServices, IStoreViewModels, IViewModels } from "./types";
import { AgencyVM } from "../view/viewModels/Agency";
import { UserVM } from "../view/viewModels/User";
import { NotificationsVM } from "../view/viewModels/NotificationsVM";
import { OrderVM } from "../view/viewModels/Order";

export class ViewModelsStore implements IStoreViewModels {
  private store: IViewModels = {};

  get notifications() {
    if (!this.store.notifications) {
      this.store.notifications = new NotificationsVM();
    }

    return this.store.notifications;
  }

  get agency() {
    if (!this.store.agency) {
      this.store.agency = new AgencyVM(
        this.notifications,
        this.services.agency
      );
    }

    return this.store.agency;
  }

  get user() {
    if (!this.store.user) {
      this.store.user = new UserVM(this.notifications, this.services.user);
    }

    return this.store.user;
  }

  get order() {
    if (!this.store.order) {
      this.store.order = new OrderVM(this.notifications, this.services.order);
    }

    return this.store.order;
  }

  constructor(private services: IStoreServices) {}
}
