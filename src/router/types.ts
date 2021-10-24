import { DefaultDependencies, Route } from "router5/dist/types/router";
import { IStoreViewModels } from "../store/types";

export type IRoutes = [
  IAgenciesRoute,
];

export interface IRoute<P = Record<string, string>>
  extends Route<IDependencies> {
  onActivate?: (store: IStoreViewModels, params?: P) => Promise<void>;
}

export interface IDependencies extends DefaultDependencies {
  store: IStoreViewModels;
}

interface IAgenciesRoute extends IRoute {}
