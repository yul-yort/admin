import { CONSTANTS } from "./globalConstants";

export const baseUrl = CONSTANTS.isDev
  ? "http://localhost:9000/"
  : window.location.origin;

export enum EEndpoints {
  AGENCY = "/api/agency",
  AGENCY_EDIT = "/api/agency/edit",
  AGENCY_DELETE = "/api/agency/delete",
  AGENCY_LIST = "/api/agency/list",
  AGENCY_CREATE = "/api/agency/create",
  LOGIN = "/api/auth/login",
  LOGOUT = "/api/auth/logout",
  ORDERS_LIST = "/api/order/list",
  ORDER_DELETE = "/api/order/delete",
  LOCALITY_LIST = "/api/locality/list",
  LOCALITY_CREATE = "/api/locality/create",
  LOCALITY_EDIT = "/api/locality/edit",
  LOCALITY_DELETE = "/api/locality/delete",
  ORDER_CREATE = "/api/order/create",
  ORDER_EDIT = "/api/order/edit",
}
