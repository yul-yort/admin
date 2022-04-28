import createAppRouter from "./router";
import { ViewModelsInitializer } from "./store";
import { initApp } from "./view/UI";
import theme from "./view/UI/theme";
import { initErrorApp } from "./view/UI/InitErrorApp";
import routes from "./router/routes";
import { checkAuthorization, onActivate } from "./router/middlewaries";
import { documentTitle } from "./router/middlewaries/documentTitle";

// TODO
console.log("REACT_APP_BUILD_MODE", process.env.REACT_APP_BUILD_MODE);
console.log("NODE_ENV", process.env.NODE_ENV);

try {
  if (
    process.env.REACT_APP_BUILD_MODE === "serve" ||
    process.env.NODE_ENV === "development"
  ) {
    const { worker } = require("./libs/mocks/browser");

    console.log(worker);

    worker.start({
      waitUntilReady: true,
      onUnhandledRequest: "bypass",
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
