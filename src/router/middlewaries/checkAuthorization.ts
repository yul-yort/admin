import { constants } from "router5";
import { Middleware, MiddlewareFactory } from "router5/dist/types/router";

import { getRouteByToStateName } from "./utils";
import { IDependencies, IRoute } from "../types";
import { CONSTANTS } from "../../constants";

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
    const route: IRoute | undefined = getRouteByToStateName(
      toStateName,
      dependencies
    );

    const isAuthorized = dependencies.store.admin.authorized;

    // Если текущая страница /login, то перенаправит на страницу по умолчанию.
    if (toStateName === "login" && isAuthorized) {
      return done({
        redirect: {
          name: CONSTANTS.defaultRoute,
        },
      });
    }

    // Если текущая страница не найдена и пользователь не авторизован, то перенаправит на страницу авторизации.
    if (toStateName === constants.UNKNOWN_ROUTE && !isAuthorized) {
      return done({
        redirect: {
          name: "login",
        },
      });
    }

    // Если текущая страница содержит поле auth и пользователь не авторизован, то перенаправит
    // на страницу авторизации с параметрами текущей страницы.
    if (route?.auth && !isAuthorized) {
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
