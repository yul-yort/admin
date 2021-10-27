import {
  ILibs,
  IStoreRepositories,
  IStoreServices,
  IStoreViewModels,
} from "./types";
import { AgencyVM } from "../view/viewModels/Agency";
import { AgencyService } from "../data/services/Agency";
import { AgencyRepository } from "../data/repositories/Agency";
import { Api } from "../libs/api";

const libs: ILibs = {
  api: new Api(),
};

const repositories: IStoreRepositories = {
  agency: new AgencyRepository(libs.api),
};

const services: IStoreServices = {
  agency: new AgencyService(repositories.agency),
};

export const viewModels: IStoreViewModels = {
  agency: new AgencyVM(services.agency),
};
