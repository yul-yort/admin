import createAppRouter from "./router";
import { ViewModelsInitializer } from "./store";
import { initApp } from "./view/UI";
import { initErrorApp } from "./view/UI/InitErrorApp";
import routes from "./router/routes";
import {
  checkAuthorization,
  onActivate,
  documentTitle,
} from "./router/middlewaries";
import { darkTheme, lightTheme } from "./view/UI/theme";

try {
  const router = createAppRouter(routes, [
    onActivate,
    documentTitle,
    checkAuthorization,
  ]);

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
