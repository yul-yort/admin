import { CONSTANTS } from "./globalConstants";

export const baseUrl = CONSTANTS.isDev
  ? CONSTANTS.devBaseUrl
  : CONSTANTS.prodBaseUrl;

export enum EEndpoints {
  LOGIN = "/api/auth/login",
  LOGOUT = "/api/auth/logout",
  ADMINS = "/api/admins",
  ADMINS_PROFILE = "/api/admins/profile",
  AGENCY = "/api/agencies/:id",
  AGENCIES = "/api/agencies",
  ORDER = "/api/orders/:id",
  ORDERS = "/api/orders",
  LOCALITY = "/api/localities/:id",
  LOCALITIES = "/api/localities",
}
