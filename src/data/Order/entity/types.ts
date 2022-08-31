import { IAgencyEntity, IAgencyResponseDTO } from "../../Agency/entity/types";
import { IRouteDTO, IRouteEntity } from "../../Route/entity/types";
import { ECurrencyISO } from "src/libs/utils/getCurrency";

export interface IOrderItemEntity {
  id: ID;
  agency: IAgencyEntity;
  route: IRouteEntity;
  price: number;
  currencyISO: ECurrencyISO;
}

export interface IOrderItemResponseDTO
  extends Omit<IOrderItemEntity, "id" | "agency" | "route"> {
  _id: string;
  agency: IAgencyResponseDTO;
  route: IRouteDTO;
}

export interface IOrderItemRequestParams {
  agencyId?: ID;
  origin?: string;
  destination?: string;
}

export type IOrderDeleteParamsReq = Pick<IOrderItemEntity, "id">;
