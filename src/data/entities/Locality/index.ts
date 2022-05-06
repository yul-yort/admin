import { ILocalityDTO, ILocalityEntity } from "./types";
import { makeAutoObservable } from "mobx";

export class LocalityEntity implements ILocalityEntity {
  id: ID;
  name: string;
  description?: string;

  constructor(dto: ILocalityDTO) {
    this.id = dto.id;
    this.name = dto.name;
    this.description = dto.description;

    makeAutoObservable(this);
  }
}
