export interface IAgencyEntity {
  readonly id: number;
  name: string;
  phones?: string[];
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export interface IAgencyResponseDTO extends IAgencyEntity {}

export type IAgencyRequestParams = Pick<IAgencyEntity, "id">;

// TODO вынести в сервисы?
export type IAgencyRequestCreateOrEditParams = Pick<
  IAgencyEntity,
  "name" | "phones" | "description"
>;

export interface IAgencyRequestDeleteParams extends Pick<IAgencyEntity, "id"> {}
