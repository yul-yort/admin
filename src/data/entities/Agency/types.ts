export interface IAgencyEntity {
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
    IAgencyEntity,
    "id" | "agencyName" | "agencyPhones" | "description"
  > {
  createDate: string;
  editedDate: string;
}

export interface IAgencyRequestParams {
  id: string;
}
