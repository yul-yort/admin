import { IAgencyRoutes, IAgencyRoutesDTO } from "./types";
import { ILocalityEntity } from "../Locality/types";

// Сущность маршрутов агенства
export class AgencyRoutes implements IAgencyRoutes {
  id: ID;
  origin: ILocalityEntity;
  destination: ILocalityEntity;
  price: number;

  constructor(dto: IAgencyRoutesDTO) {
    this.id = dto.id;
    this.origin = dto.origin;
    this.destination = dto.destination;
    this.price = dto.price;
  }
}
