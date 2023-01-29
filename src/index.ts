import createAppRouter from "./router";
import { ViewModelsInitializer } from "./store";
import { initApp } from "./view/UI";
import { initErrorApp } from "./view/UI/InitErrorApp";
import routes from "./router/routes";
import { checkAuthorization, onActivate } from "./router/middlewaries";
import { documentTitle } from "./router/middlewaries/documentTitle";
import { darkTheme, lightTheme } from "./view/UI/theme";

try {
  const router = createAppRouter(routes, [
    onActivate,
    checkAuthorization,
    documentTitle,
  ]);
  const viewModels = new ViewModelsInitializer(router).viewModels;

  router.setDependencies({ store: viewModels, routes });
  const startedRouter = router.start();

  // startedRouter.getDependencies().store.user.getAdmin();

  initApp({
    router,
    themes: [lightTheme, darkTheme],
  });
} catch (err) {
  initErrorApp(err);
}
