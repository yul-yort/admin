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
    "id" | "agencyName" | "agencyPhones" | "description"
  > {
  createDate: string;
  editedDate: string;
}

export interface IAgencyRequestParams {
  id: string;
}
