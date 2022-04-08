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

export interface IAgencyRequestParams extends Pick<IAgencyEntity, "id"> {}

export interface IAgencyRequestEditParams
  extends Pick<
    IAgencyEntity,
    "id" | "agencyName" | "phones" | "description" | "editedDate"
  > {}

export interface IAgencyRequestDeleteParams extends Pick<IAgencyEntity, "id"> {}
