import { IAgencyDomain } from "../../../../../../data/domainModels/Agency/types";

export interface IDetail {
  agency: IAgencyDomain;
}

export interface IFormFields {
  agencyName: string;
  description: string;
  phones: IFormPhone[];
}

export interface IFormPhone {
  value: string;
}
