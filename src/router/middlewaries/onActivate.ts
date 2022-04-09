import { MiddlewareFactory } from "router5/dist/types/router";
import { IDependencies, IRoute } from "../types";
import { getRouteByToStateName } from "./utils";

/**
 * Плагин вызывает метод onActivate у текущего роута, если данный метод в нем прописан.
 *
 * @param router
 * @param dependencies
 */
export const onActivate: MiddlewareFactory<IDependencies> =
  (router, dependencies) =>
  (toState): boolean => {
    let route: IRoute | undefined = getRouteByToStateName(
      toState.name,
      dependencies
    );

    route?.onActivate &&
      route?.onActivate({
        store: dependencies.store,
        params: toState.params,
        router,
      });

    return true;
  };
