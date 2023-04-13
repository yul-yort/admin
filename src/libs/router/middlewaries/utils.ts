import { IDependencies, IRoute } from "../types";

/**
 * Кэш роутов.
 */
const cache: Record<string, IRoute> = {};

export const getRouteByToStateName = (
  toStateName: string,
  dependencies: IDependencies
): IRoute | undefined => {
  // роут не найдет в кэше
  if (!(toStateName in cache)) {
    const nameSplit = toStateName.split(".");

    let route: IRoute | undefined;

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
    if (route) {
      // сохраняем в кэш, если роут найден
      cache[toStateName] = route;
    }
  }

  return cache[toStateName];
};
