import { ILocalityEntity } from "../Locality/types";

export interface IRouteEntity {
  origin: ILocalityEntity;
  destination: ILocalityEntity;
  waypoints?: ILocalityEntity[];
}

export interface IRouteDTO extends IRouteEntity {}
