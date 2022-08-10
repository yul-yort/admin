import { DefaultDependencies, Route, Router } from "router5/dist/types/router";
import { IStoreViewModels } from "../store/types";
import { IAgencyRequestParams } from "../data/Agency/entity/types";
import { IOrderItemRequestParams } from "../data/Order/entity/types";

export type IRoutes = [
  ILoginRoute,
  IDashboardRoute,
  IAgenciesRoute,
  IOrdersRoute,
  ILocalitiesRoute
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

export interface IRouteWithParams<P = Record<string, unknown>> extends IRoute {
  onActivate?: (args?: IOnActivateArgsWithParams<P>) => Promise<void>;
}

export interface IOnActivateArgs {
  store: IStoreViewModels;
  router: Router;
}

export interface IOnActivateArgsWithParams<P> extends IOnActivateArgs {
  params?: P;
}

type IAgencyRoute = IRouteWithParams<IAgencyRequestParams>;
interface IAgenciesRoute extends IRoute {
  children: [IAgencyRoute];
}
type IDashboardRoute = IRoute;
type ILoginRoute = IRoute;
type IOrdersRoute = IRouteWithParams<IOrderItemRequestParams>;
type ILocalitiesRoute = IRoute;
