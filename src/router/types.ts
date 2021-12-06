import { DefaultDependencies, Route } from "router5/dist/types/router";
import { IStoreViewModels } from "../store/types";
import { IAgencyRequestParams } from "../data/entities/Agency/types";

export type IRoutes = [IDashboardRoute, IAgenciesRoute];

export interface IRoute<P = Record<string, string>>
  extends Route<IDependencies> {
  title: string;
  onActivate?: (store: IStoreViewModels, params?: P) => void;
  children?: IRoute<P>[];
}

export interface IDependencies extends DefaultDependencies {
  store: IStoreViewModels;
  routes: IRoutes;
}

interface IAgenciesRoute extends IRoute<IAgencyRequestParams> {}
interface IDashboardRoute extends IRoute {}
