import { IAgencyEntity, IAgencyResponseDTO } from "../../Agency/entity/types";
import { ECurrencyISO } from "src/libs/utils/getCurrency";
import { ILocalityDTO } from "../../Locality/entity";
import { IRouteEntity } from "../../Route/entity/types";

export interface IOrderItemEntity {
  id: ID;
  agency: IAgencyEntity;
  route: IRouteEntity;
  price: Nullable<number>;
  currencyISO: ECurrencyISO;
}

export interface IOrderItemResponseDTO
  extends Omit<IOrderItemEntity, "route" | "agency"> {
  agency: IAgencyResponseDTO;
  origin: ILocalityDTO;
  destination: ILocalityDTO;
}

export interface IOrderItemRequestParams {
  agencyId?: ID;
  origin?: string;
  destination?: string;
}

export type IOrderDeleteParamsReq = Pick<IOrderItemEntity, "id">;
