import createAppRouter from "./router";
import { ViewModelsInitializer } from "./store";
import { initApp } from "./view/UI";
import { initErrorApp } from "./view/UI/InitErrorApp";
import routes from "./router/routes";
import { onActivate } from "./router/middlewaries";
import { documentTitle } from "./router/middlewaries/documentTitle";
import { darkTheme, lightTheme } from "./view/UI/theme";

try {
  const router = createAppRouter(routes, [onActivate, documentTitle]);
  const viewModels = new ViewModelsInitializer(router).viewModels;

  router.setDependencies({ store: viewModels, routes });
  router.start();

  initApp({
    router,
    themes: [lightTheme, darkTheme],
  });
} catch (err) {
  initErrorApp(err);
}
