import Cookies from "js-cookie";

import { CONSTANTS } from "../../constants/globalConstants";

export const checkToken = (): boolean => {
  return !!Cookies.get(CONSTANTS.tokenCookieKey);
};
