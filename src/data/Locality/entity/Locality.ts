import {
  ILocalityDTO,
  ILocalityEntity,
  TLocalityLatitude,
  TLocalityLongitude,
} from "./types";
import { makeAutoObservable } from "mobx";

/**
 * Сущность населенного пункта.
 */
export class Locality implements ILocalityEntity {
  id: ID;
  _id?: ID;
  name: string;
  description?: string;
  region?: string;
  district?: string;
  coordinates?: [TLocalityLatitude, TLocalityLongitude];

  constructor(dto: ILocalityDTO) {
    this.id = dto.id;
    this._id = dto._id;
    this.name = dto.name;
    this.description = dto.description;
    this.region = dto.region;
    this.district = dto.district;
    this.coordinates = dto.coordinates;

    makeAutoObservable(this);
  }
}
