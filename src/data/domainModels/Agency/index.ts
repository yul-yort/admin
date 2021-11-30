import { computed, makeObservable, observable } from "mobx";
import { IAgencyDomain, IAgencyResponseDTO } from "./types";

export class AgencyDomain implements IAgencyDomain {
  id: ID = "";
  agencyName: string = "";
  agencyPhones?: string[];
  createDate: Date;
  editedDate: Date | undefined;
  description: string | undefined = "";

  get phoneValues(): string[] | undefined {
    if (!this.agencyPhones || !this.agencyPhones.length) {
      return void 0;
    }

    return this.agencyPhones.map((phone) => `+7 ${phone}`);
  }

  constructor(dto: IAgencyResponseDTO) {
    this.id = dto.id;
    this.agencyName = dto.agencyName;
    this.agencyPhones = dto.agencyPhones;
    this.createDate = new Date(dto.createDate);
    this.description = dto.description;
    this.editedDate = new Date(dto.editedDate);

    makeObservable(this, {
      id: observable,
      agencyName: observable,
      agencyPhones: observable,
      phoneValues: computed,
    });
  }
}
