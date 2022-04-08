import { constants } from "router5";
import { Middleware, MiddlewareFactory } from "router5/dist/types/router";

import { getRouteByToStateName } from "./utils";
import { IDependencies, IRoute } from "../types";
import { checkToken } from "../../libs/utils/checkToken";
import { CONSTANTS } from "../../constants/globalConstants";

export const checkAuthorization: MiddlewareFactory<IDependencies> =
  (router, dependencies): Middleware =>
  (toState, _, done) => {
    const toStateName = toState.name;
    let route: IRoute | undefined = getRouteByToStateName(
      toStateName,
      dependencies
    );

    const hasToken = checkToken();

    if (toStateName === "login" && hasToken) {
      return done({
        redirect: {
          name: CONSTANTS.defaultRoute,
        },
      });
    }

    if (toStateName === constants.UNKNOWN_ROUTE && !hasToken) {
      return done({
        redirect: {
          name: "login",
        },
      });
    }

    if (route?.auth && !hasToken) {
      return done({
        redirect: {
          name: "login",
          params: {
            redirectName: toStateName,
            redirectParams: toState.params,
          },
        },
      });
    }

    return true;
  };
