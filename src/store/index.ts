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
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../router/types";

export class ViewModelsInitializer {
  viewModels: IStoreViewModels;

  constructor(router: Router<IDependencies>) {
    const libs: IStoreLibs = new LibsStore(router);
    const repositories: IStoreRepositories = new RepositoriesStore(libs);
    const services: IStoreServices = new ServicesStore(repositories);

    this.viewModels = new ViewModelsStore(services);
  }
}
