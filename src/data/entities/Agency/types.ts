export interface IAgencyEntity {
  id: ID;
  agencyName: string;
  phones?: string[];
  createDate: Date;
  description?: string;
  editedDate?: Date;
}

export interface IAgencyResponseDTO
  extends Pick<IAgencyEntity, "id" | "agencyName" | "phones" | "description"> {
  createDate: string;
  editedDate: string;
}

export interface IAgencyRequestParams {
  id: string;
}
