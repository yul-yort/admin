import { DefaultDependencies, Route, Router } from "router5/dist/types/router";
import { IViewModelsContainer } from "../../containers";
import { IAgencyRequestParams } from "../../data/Agency/entity/types";
import { IOrderItemRequestParams } from "../../data/Order/entity/types";

export enum ERouteNames {
  LOGIN = "login",
  DASHBOARD = "dashboard",
  AGENCY = "agency",
  AGENCIES = "agencies",
  ORDERS = "orders",
  LOCALITIES = "localities",
}

export type IRoutes = [
  ILoginRoute,
  IDashboardRoute,
  IAgenciesRoute,
  IOrdersRoute,
  ILocalitiesRoute
];

export interface IDependencies extends DefaultDependencies {
  store: IViewModelsContainer;
  routes: IRoutes;
}

export interface IRoute extends Route<IDependencies> {
  name: ERouteNames;
  title: string;
  onActivate?: (args?: IOnActivateArgs) => Promise<void>;
  auth?: boolean;
  children?: IRoute[];
}

export interface IRouteWithParams<P = Record<string, unknown>> extends IRoute {
  onActivate?: (args?: IOnActivateArgsWithParams<P>) => Promise<void>;
}

export interface IOnActivateArgs {
  store: IViewModelsContainer;
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
