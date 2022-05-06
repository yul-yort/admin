import { IAgencyEntity } from "../Agency/types";
import { IRouteEntity } from "../Route/types";

export interface IOrderItemEntity {
  id: ID;
  agency: IOrderAgency;
  route: IOrderRoute;
  price?: number;
  currencyISO: ECurrencyISO;
}

export interface IOrderRoute extends IRouteEntity {}

export interface IOrderAgency
  extends Pick<IAgencyEntity, "id" | "agencyName" | "phones" | "description"> {}

export enum ECurrencyISO {
  RUB = "RUB",
}

export interface IOrderItemResponseDTO extends IOrderItemEntity {}

export interface IOrderItemRequestParams {
  origin: string;
  destination: string;
}
