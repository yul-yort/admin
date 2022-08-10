import { makeObservable, observable } from "mobx";
import { IAgencyEntity, IAgencyResponseDTO } from "./types";
import { format } from "date-fns";

export class Agency implements IAgencyEntity {
  id: ID = "";
  agencyName = "";
  phones?: string[];
  createDate: string;
  editedDate: string | undefined;
  description: string | undefined = "";

  constructor(dto: IAgencyResponseDTO) {
    this.id = dto.id;
    this.agencyName = dto.agencyName;
    this.phones = dto.phones;
    this.createDate = format(new Date(dto.createDate), "dd.MM.yyyy  HH:mm");
    this.description = dto.description;
    this.editedDate = dto.editedDate
      ? format(new Date(dto.editedDate), "dd.MM.yyyy  HH:mm")
      : "";

    makeObservable(this, {
      id: observable,
      agencyName: observable,
      phones: observable,
      createDate: observable,
      editedDate: observable,
      description: observable,
    });
  }
}
