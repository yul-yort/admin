import { IRouteDTO, IRouteEntity } from "./types";
import { ILocalityEntity, Locality } from "../../Locality/entity";

/**
 * Сущность маршрута.
 */
export class Route implements IRouteEntity {
  origin: ILocalityEntity;
  destination: ILocalityEntity;

  constructor(dto: IRouteDTO) {
    this.origin = new Locality(dto.origin);
    this.destination = new Locality(dto.destination);
  }
}
