import { MiddlewareFactory } from "router5/dist/types/router";
import { IDependencies, IRoute } from "../types";

export const onActivate: MiddlewareFactory<IDependencies> =
  (router, dependencies) =>
  (toState): boolean => {
    const nameSplit = toState.name.split(".");

    let route: IRoute<any> | undefined;

    nameSplit.forEach((name, index) => {
      if (index === 0) {
        route = dependencies.routes.find((route) => {
          return route.name === name;
        });
      } else {
        route = route?.children?.find((route) => {
          return route.name === name;
        });
      }
    });

    route?.onActivate && route?.onActivate(dependencies.store, toState.params);
    document.title = route?.title || "Yul-Yort Admin";

    return true;
  };
