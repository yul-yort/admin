import { MiddlewareFactory } from "router5/dist/types/router";
import { IDependencies, IRoute } from "../types";
import { CONSTANTS } from "../../constants/globalConstants";
import { getRouteByToStateName } from "./utils";

export const onActivate: MiddlewareFactory<IDependencies> =
  (router, dependencies) =>
  (toState): boolean => {
    let route: IRoute | undefined = getRouteByToStateName(
      toState.name,
      dependencies
    );

    route?.fetchData &&
      route?.fetchData({
        store: dependencies.store,
        params: toState.params,
        router,
      });
    // TODO перенести в плагины
    document.title = route?.title || CONSTANTS.projectName;

    return true;
  };
