import { constants } from "router5";
import { Middleware, MiddlewareFactory } from "router5/dist/types/router";

import { getRouteByToStateName } from "./utils";
import { IDependencies, IRoute } from "../types";
import { checkToken } from "../../libs/utils/checkToken";

export const checkAuthorization: MiddlewareFactory<IDependencies> =
  (router, dependencies): Middleware =>
  (toState, _, done) => {
    const toStateName = toState.name;
    let route: IRoute | undefined = getRouteByToStateName(
      toStateName,
      dependencies
    );

    if (!route) {
      return true;
    }

    const hasToken = checkToken();
    const redirect = {
      redirectName: toStateName,
      redirectParams: toState.params,
    };

    if (toStateName === "login" && hasToken) {
      return done({ redirect: { name: "dashboard" } });
    }

    if ((route.auth || toStateName === constants.UNKNOWN_ROUTE) && !hasToken) {
      return done({ redirect: { name: "login", params: redirect } });
    }

    return true;
  };
