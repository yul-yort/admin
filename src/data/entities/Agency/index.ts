import { makeObservable, observable } from "mobx";
import { IAgencyEntity, IAgencyResponseDTO } from "./types";

export class Agency implements IAgencyEntity {
  id: ID = "";
  agencyName: string = "";
  phones?: string[];
  createDate: Date;
  editedDate: Date | undefined;
  description: string | undefined = "";

  constructor(dto: IAgencyResponseDTO) {
    this.id = dto.id;
    this.agencyName = dto.agencyName;
    this.phones = dto.phones;
    this.createDate = new Date(dto.createDate);
    this.description = dto.description;
    this.editedDate = new Date(dto.editedDate);

    makeObservable(this, {
      id: observable,
      agencyName: observable,
      phones: observable,
    });
  }
}
