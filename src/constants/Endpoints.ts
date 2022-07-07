import { CONSTANTS } from "./globalConstants";

export const baseUrl = CONSTANTS.isDev
  ? "http://localhost:9000/"
  : window.location.origin;

export enum EEndpoints {
  AGENCY = "/agency",
  AGENCY_EDIT = "/agency-edit",
  AGENCY_DELETE = "/agency-delete",
  AGENCY_LIST = "/agency-list",
  AGENCY_CREATE = "/agency-create",
  LOGIN = "/api/auth/login",
  LOGOUT = "/logout",
  ORDERS_LIST = "/order-list",
  ORDER_DELETE = "/order-delete",
  LOCALITY_LIST = "/locality-list",
  ORDER_CREATE = "/order-create",
}
