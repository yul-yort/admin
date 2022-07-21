import createAppRouter from "./router";
import { ViewModelsInitializer } from "./store";
import { initApp } from "./view/UI";
import theme from "./view/UI/theme";
import { initErrorApp } from "./view/UI/InitErrorApp";
import routes from "./router/routes";
import { checkAuthorization, onActivate } from "./router/middlewaries";
import { documentTitle } from "./router/middlewaries/documentTitle";
import * as workerInstance from "./libs/mocks/browser";

try {
  const BUILD_MODE = process.env.REACT_APP_BUILD_MODE;
  const NODE_ENV = process.env.NODE_ENV;

  if (
    BUILD_MODE === "serve" ||
    BUILD_MODE === "gh-pages" ||
    NODE_ENV === "development"
  ) {
    workerInstance.worker.start({
      onUnhandledRequest: "bypass",
      serviceWorker: {
        url: `/${
          BUILD_MODE === "gh-pages" ? "yul-yort-admin/" : ""
        }mockServiceWorker.js`,
      },
    });
  }

  const router = createAppRouter(routes, [
    onActivate,
    checkAuthorization,
    documentTitle,
  ]);
  const viewModels = new ViewModelsInitializer(router).viewModels;

  router.setDependencies({ store: viewModels, routes });
  router.start();

  initApp({
    router,
    theme,
  });
} catch (err) {
  initErrorApp(err);
}
