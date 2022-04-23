import { makeObservable, observable } from "mobx";
import { IAgencyEntity, IAgencyResponseDTO } from "./types";
import { AgencyItem } from "./AgencyItem";
import { format } from "date-fns";

export class Agency extends AgencyItem implements IAgencyEntity {
  editedDate: string | undefined;
  description: string | undefined = "";

  constructor(dto: IAgencyResponseDTO) {
    super({
      id: dto.id,
      createDate: dto.createDate,
      agencyName: dto.agencyName,
      phones: dto.phones,
    });

    this.description = dto.description;
    this.editedDate = dto.editedDate
      ? format(new Date(dto.editedDate), "dd.MM.yyyy  HH:mm")
      : "";

    makeObservable(this, {
      editedDate: observable,
      description: observable,
    });
  }
}
