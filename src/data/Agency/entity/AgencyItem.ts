import { makeObservable, observable } from "mobx";
import { IAgencyItemEntity, IAgencyItemResponseDTO } from "./types";
import { format } from "date-fns";

export class AgencyItem implements IAgencyItemEntity {
  id: ID = "";
  agencyName = "";
  phones?: string[];
  createDate: string;

  constructor(dto: IAgencyItemResponseDTO) {
    this.id = dto.id;
    this.agencyName = dto.agencyName;
    this.phones = dto.phones;
    this.createDate = format(new Date(dto.createDate), "dd.MM.yyyy  HH:mm");

    makeObservable(this, {
      id: observable,
      agencyName: observable,
      phones: observable,
      createDate: observable,
    });
  }
}
