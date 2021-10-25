import { IDependencies } from "../types";
import { MiddlewareFactory } from "router5/dist/types/router";

export const onActivate: MiddlewareFactory<IDependencies> =
  (router, dependencies) =>
  (toState): boolean => {
    const route = dependencies.routes.find(
      (route) => route.name === toState.name
    );

    route?.onActivate && route?.onActivate(dependencies.store, toState.params);
    document.title = route?.title || "Yul-Yort Admin";

    return true;
  };
