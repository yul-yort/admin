import { DefaultDependencies, Route, Router } from "router5/dist/types/router";
import { IStoreViewModels } from "../store/types";
import { IAgencyRequestParams } from "../data/entities/Agency/types";
import { IOrderItemRequestParams } from "../data/entities/Order/types";

export type IRoutes = [
  ILoginRoute,
  IDashboardRoute,
  IAgenciesRoute,
  IOrdersRoute
];

export interface IDependencies extends DefaultDependencies {
  store: IStoreViewModels;
  routes: IRoutes;
}

export interface IRoute extends Route<IDependencies> {
  title: string;
  onActivate?: (args?: IOnActivateArgs) => Promise<void>;
  auth?: boolean;
  children?: IRoute[];
}

export interface IRouteWithParams<P = {}> extends IRoute {
  onActivate?: (args?: IOnActivateArgsWithParams<P>) => Promise<void>;
}

export interface IOnActivateArgs {
  store: IStoreViewModels;
  router: Router;
}

export interface IOnActivateArgsWithParams<P> extends IOnActivateArgs {
  params?: P;
}

interface IAgencyRoute extends IRouteWithParams<IAgencyRequestParams> {}
interface IAgenciesRoute extends IRoute {
  children: [IAgencyRoute];
}
interface IDashboardRoute extends IRoute {}
interface ILoginRoute extends IRoute {}
interface IOrdersRoute extends IRouteWithParams<IOrderItemRequestParams> {}
