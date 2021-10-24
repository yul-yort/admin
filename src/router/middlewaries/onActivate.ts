import { IDependencies, IRoute } from "../types";
import { MiddlewareFactory } from "router5/dist/types/router";

export const onActivate =
  (routes: IRoute[]): MiddlewareFactory<IDependencies> =>
  (router, dependencies) =>
  (toState): boolean => {
    const route = routes.find((route) => route.name === toState.name);

    route?.onActivate && route?.onActivate(dependencies.store, toState.params);

    return true;
  };
