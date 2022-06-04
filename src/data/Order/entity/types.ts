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

export interface IOrderRoute extends IRouteEntity {}

export interface IOrderAgency
  extends Pick<IAgencyEntity, "id" | "agencyName" | "phones" | "description"> {}

export interface IOrderItemResponseDTO extends IOrderItemEntity {}

export interface IOrderItemRequestParams {
  agencyId?: ID;
  origin?: string;
  destination?: string;
}
