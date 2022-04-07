import { Middleware, MiddlewareFactory } from "router5/dist/types/router";
import { constants } from "router5";

import { getRouteByToStateName } from "./utils";
import { IDependencies, IRoute } from "../types";
import { checkToken } from "../../libs/utils/checkToken";

export const checkAuthorization: MiddlewareFactory<IDependencies> =
  (router, dependencies): Middleware =>
  (toState, _, done) => {
    let route: IRoute | undefined = getRouteByToStateName(
      toState.name,
      dependencies
    );

    if (
      (route?.auth || toState.name === constants.UNKNOWN_ROUTE) &&
      !checkToken()
    ) {
      return done({ redirect: { name: "login" } });
    }
    return true;
  };
