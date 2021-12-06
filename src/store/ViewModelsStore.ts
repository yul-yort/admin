import { IStoreServices, IStoreViewModels, IViewModels } from "./types";
import { AgencyVM } from "../view/viewModels/Agency";

export class ViewModelsStore implements IStoreViewModels {
  private store: IViewModels = {};

  get agency() {
    if (this.store.agency) {
      return this.store.agency;
    }

    this.store.agency = new AgencyVM(this.services.agency);
    return this.store.agency;
  }

  constructor(private services: IStoreServices) {}
}
