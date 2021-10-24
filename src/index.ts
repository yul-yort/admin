import createAppRouter from "./router";
import { viewModels } from "./store";
import { initApp } from "./view/UI";
import theme from "./view/UI/theme";
import { initErrorApp } from "./view/UI/initErrorApp";

try {
  const { worker } = require("./libs/mocks/browser");

  worker.start({
    onUnhandledRequest: "bypass",
  });

  const router = createAppRouter({ store: viewModels });

  router.start("/agency");

  initApp({
    router,
    theme,
  });
} catch (err) {
  initErrorApp(err);
}
