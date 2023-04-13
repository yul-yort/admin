import { initApp } from "./view/UI";
import { initErrorApp } from "./view/UI/InitErrorApp";
import routes from "./libs/router/routes";
import {
  checkAuthorization,
  onActivate,
  documentTitle,
} from "./libs/router/middlewaries";
import { darkTheme, lightTheme } from "./view/UI/theme";
import {
  errorHook,
  loginOrRefreshHook,
  logoutHook,
} from "./libs/fetcher/hooks";
import {
  LibsContainer,
  RepositoriesContainer,
  ServicesContainer,
  ViewModelsContainer,
} from "./containers";

const bootstrap = () => {
  try {
    const libsContainer = new LibsContainer();
    const repositoriesContainer = new RepositoriesContainer(libsContainer);
    const servicesContainer = new ServicesContainer(repositoriesContainer);
    const viewModelsContainer = new ViewModelsContainer(servicesContainer);

    const { fetcher, router } = libsContainer;

    const routerMiddlewares = [onActivate, documentTitle, checkAuthorization];
    const fetcherResponseHooks = [
      loginOrRefreshHook(router),
      logoutHook(router),
    ];
    const fetcherErrorHooks = [errorHook(fetcher, router)];

    routerMiddlewares.forEach((middleware) => router.useMiddleware(middleware));
    fetcherResponseHooks.forEach((hook) => fetcher.useResponseHook(hook));
    fetcherErrorHooks.forEach((hook) => fetcher.useErrorHook(hook));

    router.setDependencies({ store: viewModelsContainer, routes });
    router.start();

    const destroy = () => {
      viewModelsContainer.destroy();
      servicesContainer.destroy();
      repositoriesContainer.destroy();
      libsContainer.destroy();
    };

    initApp({
      router,
      themes: [lightTheme, darkTheme],
      onDestroy: destroy,
    });
  } catch (err) {
    initErrorApp(err);
  }
};

bootstrap();
