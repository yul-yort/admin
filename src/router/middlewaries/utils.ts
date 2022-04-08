import { IDependencies, IRoute } from "../types";

/**
 * Кэшируем объекты роутов.
 */
let cache: Record<string, IRoute> = {};

export const getRouteByToStateName = (
  toStateName: string,
  dependencies: IDependencies
): IRoute | undefined => {
  if (toStateName in cache) {
    // получаем из кэша
    return cache[toStateName];
  } else {
    const nameSplit = toStateName.split(".");

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
    if (route) {
      // сохроняем в кэш, если роут найден
      cache[toStateName] = route;
    }
    return route;
  }
};
