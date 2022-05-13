import { ILocalityEntity } from "../Locality/types";

export interface IAgencyRoutes {
  id: ID;
  origin: ILocalityEntity;
  destination: ILocalityEntity;
  price: number;
}

export interface IAgencyRoutesDTO extends IAgencyRoutes {}
