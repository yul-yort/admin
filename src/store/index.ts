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

  constructor(private router: Router<IDependencies>) {
    const libs: IStoreLibs = new LibsStore();
    const repositories: IStoreRepositories = new RepositoriesStore(
      libs,
      this.router
    );
    const services: IStoreServices = new ServicesStore(repositories);

    this.viewModels = new ViewModelsStore(services);
  }
}
