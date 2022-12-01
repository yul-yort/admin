import { CONSTANTS } from "./globalConstants";

export const baseUrl = CONSTANTS.isDev
  ? "http://localhost:9000/"
  : window.location.origin;

export enum EEndpoints {
  LOGIN = "/api/auth/login",
  LOGOUT = "/api/auth/logout",
  AGENCIES = "/api/agencies",
  ORDERS = "/api/orders",
  LOCALITIES = "/api/localities",
}
