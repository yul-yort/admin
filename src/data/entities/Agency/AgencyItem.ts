import { makeObservable, observable } from "mobx";
import { IAgencyItemEntity, IAgencyItemResponseDTO } from "./types";

export class AgencyItem implements IAgencyItemEntity {
  id: ID = "";
  agencyName: string = "";
  phones?: string[];
  createDate: Date;

  constructor(dto: IAgencyItemResponseDTO) {
    this.id = dto.id;
    this.agencyName = dto.agencyName;
    this.phones = dto.phones;
    this.createDate = new Date(dto.createDate);

    makeObservable(this, {
      id: observable,
      agencyName: observable,
      phones: observable,
      createDate: observable,
    });
  }
}
