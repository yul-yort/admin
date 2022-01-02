import { MiddlewareFactory } from "router5/dist/types/router";
import { IDependencies, IRoute } from "../types";
import { CONSTANTS } from "../../constants/globalConstants";

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

    route?.onActivate &&
      route?.onActivate({
        store: dependencies.store,
        params: toState.params,
        router,
      });
    document.title = route?.title || CONSTANTS.projectName;

    return true;
  };
