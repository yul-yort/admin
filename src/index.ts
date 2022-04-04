import createAppRouter from "./router";
import { viewModels } from "./store";
import { initApp } from "./view/UI";
import theme from "./view/UI/theme";
import { initErrorApp } from "./view/UI/initErrorApp";
import routes from "./router/routes";
import { onActivate } from "./router/middlewaries/onActivate";

try {
  const { worker } = require("./libs/mocks/browser");

  worker.start({
    onUnhandledRequest: "bypass",
  });

  const router = createAppRouter(routes, { store: viewModels, routes }, [
    onActivate,
  ]);

  router.start();

  initApp({
    router,
    theme,
  });
} catch (err) {
  initErrorApp(err);
}
