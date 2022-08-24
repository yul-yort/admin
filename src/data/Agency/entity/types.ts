export interface IAgencyEntity {
  id: ID;
  agencyName: string;
  phones?: string[];
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export interface IAgencyResponseDTO extends Omit<IAgencyEntity, "id"> {
  _id: string;
}

export type IAgencyRequestParams = Pick<IAgencyEntity, "id">;

// TODO вынести в сервисы?
export type IAgencyRequestCreateOrEditParams = Pick<
  IAgencyEntity,
  "agencyName" | "phones" | "description"
>;

export interface IAgencyRequestDeleteParams extends Pick<IAgencyEntity, "id"> {}
