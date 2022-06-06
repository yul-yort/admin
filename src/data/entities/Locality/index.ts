import { ILocalityDTO, ILocalityEntity } from "./types";
import { makeAutoObservable } from "mobx";

/**
 * Сущность населенного пункта.
 */
export class Locality implements ILocalityEntity {
  id: ID;
  name: string;
  description?: string;
  region?: string;
  district?: string;
  coordinates?: string;

  constructor(dto: ILocalityDTO) {
    this.id = dto.id;
    this.name = dto.name;
    this.description = dto.description;
    this.region = dto.region;
    this.district = dto.district;
    this.coordinates = dto.coordinates;

    makeAutoObservable(this);
  }
}
