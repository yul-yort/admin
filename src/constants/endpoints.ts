import { CONSTANTS } from "./globalConstants";

export const baseUrl = CONSTANTS.isDev
  ? CONSTANTS.devBaseUrl
  : CONSTANTS.prodBaseUrl;

export enum EEndpoints {
  LOGIN = "/api/auth/login",
  LOGOUT = "/api/auth/logout",
  ADMINS = "/api/admins",
  ADMINS_PROFILE = "/api/admins/profile",
  AGENCIES = "/api/agencies",
  ORDERS = "/api/orders",
  LOCALITIES = "/api/localities",
}
