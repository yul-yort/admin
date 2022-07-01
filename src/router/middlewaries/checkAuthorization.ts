import { constants } from "router5";
import { Middleware, MiddlewareFactory } from "router5/dist/types/router";

import { getRouteByToStateName } from "./utils";
import { IDependencies, IRoute } from "../types";
import { checkToken } from "../../libs/utils";
import { CONSTANTS } from "../../constants/globalConstants";

/**
 * Плагин проверяет авторизацию.
 * Если текущая страница /login и пользователь авторизован, то перенаправит на
 * страницу по умолчанию (dashboard).
 *
 * Если текущая страница не найдена и пользователь не авторизован,
 * то перенаправит на страницу авторизации.
 *
 * Если у текущего объекта route поле auth: true и пользователь не авторизован,
 * то перенаправит на страницу авторизации с параметрами текущей страницы.
 *
 * @param router
 * @param dependencies
 */
export const checkAuthorization: MiddlewareFactory<IDependencies> =
  (router, dependencies): Middleware =>
  (toState, _, done) => {
    const toStateName = toState.name;
    let route: IRoute | undefined = getRouteByToStateName(
      toStateName,
      dependencies
    );

    const hasToken = checkToken();

    // Если текущая страница /login, то перенаправит на страницу по умолчанию.
    if (toStateName === "login" && hasToken) {
      return done({
        redirect: {
          name: CONSTANTS.defaultRoute,
        },
      });
    }

    // Если текущая страница не найдена и пользователь не авторизован, то перенаправит на страницу авторизации.
    if (toStateName === constants.UNKNOWN_ROUTE && !hasToken) {
      return done({
        redirect: {
          name: "login",
        },
      });
    }

    // Если текущая страница содержит поле auth и пользователь не авторизован, то перенаправит
    // на страницу авторизации с параметрами текущей страницы.
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
