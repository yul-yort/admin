import { makeObservable, observable } from "mobx";
import { IAgencyEntity, IAgencyResponseDTO } from "./types";
import { AgencyItem } from "./AgencyItem";

export class Agency extends AgencyItem implements IAgencyEntity {
  editedDate: Date | undefined;
  description: string | undefined = "";

  constructor(dto: IAgencyResponseDTO) {
    super({
      id: dto.id,
      createDate: dto.createDate,
      agencyName: dto.agencyName,
      phones: dto.phones,
    });

    this.description = dto.description;
    this.editedDate = new Date(dto.editedDate);

    makeObservable(this, {
      editedDate: observable,
      description: observable,
    });
  }
}
