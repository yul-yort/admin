import { IStoreServices, IStoreViewModels, IViewModels } from "./types";
import { AgencyVM } from "../view/viewModels/Agency";
import { NotificationsVM } from "../view/viewModels/NotificationsVM";

export class ViewModelsStore implements IStoreViewModels {
  private store: IViewModels = {};

  get agency() {
    if (this.store.agency) {
      return this.store.agency;
    }

    this.store.agency = new AgencyVM(this.services.agency);
    return this.store.agency;
  }

  get notifications() {
    if (this.store.notifications) {
      return this.store.notifications;
    }

    this.store.notifications = new NotificationsVM();
    return this.store.notifications;
  }

  constructor(private services: IStoreServices) {}
}
