import { IRouteDTO, IRouteEntity } from "./types";
import { ILocalityEntity } from "../Locality/types";

export class RouteEntity implements IRouteEntity {
  origin: ILocalityEntity;
  destination: ILocalityEntity;
  waypoints?: ILocalityEntity[];

  constructor(dto: IRouteDTO) {
    this.origin = dto.origin;
    this.destination = dto.destination;
    this.waypoints = dto.waypoints;
  }
}
