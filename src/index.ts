import createAppRouter from "./router";
import { ViewModelsInitializer } from "./store";
import { initApp } from "./view/UI";
import theme from "./view/UI/theme";
import { initErrorApp } from "./view/UI/initErrorApp";
import routes from "./router/routes";

try {
  const { worker } = require("./libs/mocks/browser");

  worker.start({
    onUnhandledRequest: "bypass",
  });

  const router = createAppRouter();
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
