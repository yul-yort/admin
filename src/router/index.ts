import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import { MiddlewareFactory, Router } from "router5/dist/types/router";

import { IDependencies, IRoutes } from "./types";

export default function createAppRouter(
  routes: IRoutes,
  dependencies: IDependencies,
  middlewares: Array<MiddlewareFactory<IDependencies>>
): Router<IDependencies> {
  const router = createRouter<IDependencies>(
    routes,
    {
      allowNotFound: true,
      queryParamsMode: "loose",
      autoCleanUp: true,
    },
    dependencies
  );

  router.usePlugin(browserPlugin());

  middlewares.forEach((middleware) => router.useMiddleware(middleware));

  return router;
}
