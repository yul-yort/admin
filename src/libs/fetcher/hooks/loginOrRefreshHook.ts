import { Router } from "router5";
import { TResponseHook } from "../types";
import { CONSTANTS, EEndpoints } from "../../../common";
import { IDependencies } from "../../router/types";

const loginOrRefreshHook =
  (router: Router<IDependencies>): TResponseHook =>
  ({ response, url }) => {
    if (url.includes(EEndpoints.LOGIN) || url.includes(EEndpoints.REFRESH)) {
      if (!response.admin) {
        throw new Error("No admin data in login or refresh response");
      }

      const { id, firstName, lastName } = response.admin;

      localStorage.setItem(
        CONSTANTS.publicAdminInfoKey,
        JSON.stringify({ id, firstName, lastName })
      );
    }

    if (url.includes(EEndpoints.LOGIN)) {
      const {
        params: {
          redirectName = CONSTANTS.defaultRoute,
          redirectParams = "{}",
        },
      } = router.getState();

      router.navigate(redirectName, JSON.parse(redirectParams));
    }
  };

export { loginOrRefreshHook };
