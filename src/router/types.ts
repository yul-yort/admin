import { DefaultDependencies, Route } from "router5/dist/types/router";
import { IStoreViewModels } from "../store/types";

export type IRoutes = [IDashboardRoute, IAgenciesRoute];

export interface IRoute<P = Record<string, string>>
  extends Route<IDependencies> {
  title: string;
  onActivate?: (store: IStoreViewModels, params?: P) => Promise<void>;
  children?: IRoute<P>[];
}

export interface IDependencies extends DefaultDependencies {
  store: IStoreViewModels;
  routes: IRoutes;
}

interface IAgenciesRoute extends IRoute {}
interface IDashboardRoute extends IRoute {}
