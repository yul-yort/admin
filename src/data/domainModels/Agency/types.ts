export interface IAgencyDomain {
  id: ID;
  agencyName: string;
  agencyPhones?: string[];
  createDate: Date;
  description?: string;
  editedDate?: Date;

  phoneValues?: string[];
}

export interface IAgencyResponseDTO
  extends Pick<
    IAgencyDomain,
    "id" | "agencyName" | "agencyPhones" | "createDate" | "description" | "editedDate"
  > {}

export interface IAgencyRequestParams {
  id: string;
}
