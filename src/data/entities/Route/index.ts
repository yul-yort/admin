import { IRouteDTO, IRouteEntity } from "./types";
import { ILocalityEntity } from "../Locality/types";

/**
 * Сущность маршрута.
 */
export class RouteEntity implements IRouteEntity {
  id: ID;
  origin: ILocalityEntity;
  destination: ILocalityEntity;
  waypoints?: ILocalityEntity[];

  constructor(dto: IRouteDTO) {
    this.id = dto.id;
    this.origin = dto.origin;
    this.destination = dto.destination;
    this.waypoints = dto.waypoints;
  }
}
