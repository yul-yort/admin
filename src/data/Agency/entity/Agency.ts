import { makeObservable, observable } from "mobx";
import { IAgencyEntity, IAgencyResponseDTO } from "./types";
import { format } from "date-fns";

export class Agency implements IAgencyEntity {
  id: ID = "";
  agencyName = "";
  phones?: string[];
  createdAt: string;
  updatedAt: string;
  description?: string = "";

  constructor(dto: IAgencyResponseDTO) {
    this.id = dto._id;
    this.agencyName = dto.agencyName;
    this.phones = dto.phones;
    this.createdAt = format(new Date(dto.createdAt), "dd.MM.yyyy  HH:mm");
    this.description = dto.description;
    this.updatedAt = format(new Date(dto.updatedAt), "dd.MM.yyyy  HH:mm");

    makeObservable(this, {
      id: observable,
      agencyName: observable,
      phones: observable,
      createdAt: observable,
      updatedAt: observable,
      description: observable,
    });
  }
}
