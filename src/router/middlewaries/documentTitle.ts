import { MiddlewareFactory } from "router5/dist/types/router";
import { IDependencies, IRoute } from "../types";
import { CONSTANTS } from "../../constants/globalConstants";
import { getRouteByToStateName } from "./utils";

/**
 * Плагин синхронно меняет заголовок документа.
 * Для асинхронной или отложенной замены используйте onActivate в src/router/routes.ts.
 *
 * @param router: Router
 * @param dependencies: IDependencies
 */
export const documentTitle: MiddlewareFactory<IDependencies> =
  (router, dependencies) =>
  (toState): boolean => {
    let route: IRoute | undefined = getRouteByToStateName(
      toState.name,
      dependencies
    );

    document.title = route?.title || CONSTANTS.projectName;

    return true;
  };
