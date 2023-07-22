import { CONSTANTS } from "./globalConstants";

export const baseUrl = CONSTANTS.isDev
  ? "http://localhost:9000/"
  : window.location.origin;

export enum EEndpoints {
  REFRESH = "/api/auth/refresh",
  LOGIN = "/api/auth/login",
  LOGOUT = "/api/auth/logout",
  ADMINS = "/api/admins",
  ADMINS_PROFILE = "/api/admins/profile",
  AGENCIES = "/api/agencies",
  ORDERS = "/api/orders",
  LOCALITIES = "/api/localities",
}
