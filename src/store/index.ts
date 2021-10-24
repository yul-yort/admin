import {
  ILibs,
  IStoreRepositories,
  IStoreServices,
  IStoreViewModels,
} from "./types";
import { OrderService } from "../data/services/Order";
import { OrderRepository } from "../data/repositories/Order";
import { OrderVM } from "../view/viewModels/Order";
import { Api } from "../libs/api";

const libs: ILibs = {
  api: new Api(),
};

const repositories: IStoreRepositories = {
  order: new OrderRepository(libs.api),
};

const services: IStoreServices = {
  order: new OrderService(repositories.order),
};

export const viewModels: IStoreViewModels = {
  agency: new OrderVM(services.order),
};
