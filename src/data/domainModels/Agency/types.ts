export interface IAgencyDomain {
  id: ID;
  agencyName: string;
  agencyPhones?: string[];
  createDate: Date;
  description?: string;

  phoneValues?: string[];
}

export interface IAgencyResponseDTO
  extends Pick<
    IAgencyDomain,
    "id" | "agencyName" | "agencyPhones" | "createDate" | "description"
  > {}

export interface IAgencyRequestParams {
  id: string;
}
