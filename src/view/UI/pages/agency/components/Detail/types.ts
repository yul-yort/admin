import { IAgencyEntity } from "../../../../../../data/entities/Agency/types";

export interface IDetail {
  agency: IAgencyEntity;
}

export interface IFormFields {
  agencyName: string;
  description: string;
  phones: IFormPhone[];
}

export interface IFormPhone {
  value: string;
}
