import { IFetcher, TErrorHook } from "../types";
import { CONSTANTS, EEndpoints } from "../../../common";
import { Router } from "router5";
import { ERouteNames, IDependencies } from "../../router/types";

let isRefreshing = false;

const error401Hook: (
  fetcher: IFetcher,
  router: Router<IDependencies>
) => TErrorHook =
  (fetcher: IFetcher, router: Router<IDependencies>) =>
  async ({ error, url, params }) => {
    if (error.statusCode !== 401) {
      return;
    }

    try {
      if (!url.includes(EEndpoints.REFRESH)) {
        await fetcher.post(EEndpoints.REFRESH);
        await fetcher.post(params.endpoint, params.args);
      } else {
        localStorage.removeItem(CONSTANTS.publicAdminInfoKey);
        const { params, name } = router.getState();
        router.navigate(ERouteNames.LOGIN, {
          redirectName: name,
          redirectParams: JSON.stringify(params),
        });
      }
    } finally {
      isRefreshing = false;
    }
  };

export { error401Hook };
