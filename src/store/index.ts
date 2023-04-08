import {
  IStoreLibs,
  IStoreRepositories,
  IStoreServices,
  IStoreViewModels,
} from "./types";
import { LibsStore } from "./LibsStore";
import { RepositoriesStore } from "./RepositoriesStore";
import { ServicesStore } from "./ServicesStore";
import { ViewModelsStore } from "./ViewModelsStore";

export class ViewModelsInitializer {
  viewModels: IStoreViewModels;

  constructor() {
    const libs: IStoreLibs = new LibsStore();
    const repositories: IStoreRepositories = new RepositoriesStore(libs);
    const services: IStoreServices = new ServicesStore(repositories);

    this.viewModels = new ViewModelsStore(services);
  }
}
