import { DefaultDependencies, Route, Router } from "router5/dist/types/router";
import { IStoreViewModels } from "../store/types";
import { IAgencyRequestParams } from "../data/entities/Agency/types";

export type IRoutes = [ILoginRoute, IDashboardRoute, IAgenciesRoute];

export interface IRoute<P = Record<string, string>>
  extends Route<IDependencies> {
  title: string;
  onActivate?: (args?: IOnActivateArgs<P>) => void;
  auth?: boolean;
  children?: IRoute<P>[];
}

export interface IDependencies extends DefaultDependencies {
  store: IStoreViewModels;
  routes: IRoutes;
}

export interface IOnActivateArgs<P> {
  store: IStoreViewModels;
  router: Router;
  params?: P;
}

interface IAgenciesRoute extends IRoute<IAgencyRequestParams> {}
interface IDashboardRoute extends IRoute {}
interface ILoginRoute extends IRoute {}
