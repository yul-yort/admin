import { TResponseHook } from "../types";
import { CONSTANTS, EEndpoints } from "../../../common";
import { Router } from "router5";
import { ERouteNames, IDependencies } from "../../router/types";

const logoutHook =
  (router: Router<IDependencies>): TResponseHook =>
  ({ url }) => {
    if (url.includes(EEndpoints.LOGOUT)) {
      localStorage.removeItem(CONSTANTS.publicAdminInfoKey);
      const { params, name } = router.getState();
      router.navigate(ERouteNames.LOGIN, {
        redirectName: name,
        redirectParams: JSON.stringify(params),
      });
    }
  };

export { logoutHook };
