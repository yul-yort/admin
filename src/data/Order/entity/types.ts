import { IAgencyEntity } from "../../Agency/entity/types";
import { IRouteEntity } from "../../Route/entity/types";
import { ECurrencyISO } from "src/libs/utils/getCurrency";

export interface IOrderItemEntity {
  id: ID;
  agency: IOrderAgency;
  route: IOrderRoute;
  price: number;
  currencyISO: ECurrencyISO;
}

export type IOrderRoute = IRouteEntity;

export type IOrderAgency = Pick<
  IAgencyEntity,
  "id" | "agencyName" | "phones" | "description"
>;

export type IOrderItemResponseDTO = IOrderItemEntity;

export interface IOrderItemRequestParams {
  agencyId?: ID;
  origin?: string;
  destination?: string;
}
