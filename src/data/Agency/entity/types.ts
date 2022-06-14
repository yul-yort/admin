/**
 * Типы элементов списка. Начало.
 */
export interface IAgencyEntity {
  id: ID;
  agencyName: string;
  phones?: string[];
  createDate: string;
  editedDate?: string;
  description?: string;
}

export interface IAgencyResponseDTO
  extends Pick<IAgencyEntity, "id" | "agencyName" | "phones"> {
  createDate: number;
}

export interface IAgencyResponseDTO
  extends Omit<IAgencyEntity, "createDate" | "editedDate"> {
  createDate: number;
  editedDate?: number;
}

export interface IAgencyRequestParams extends Pick<IAgencyEntity, "id"> {}

export interface IAgencyRequestEditParams
  extends Pick<IAgencyEntity, "id" | "agencyName" | "phones" | "description"> {
  editedDate: number;
}

export interface IAgencyRequestCreateParams
  extends Pick<IAgencyEntity, "agencyName" | "phones" | "description"> {
  createDate: number;
}

export interface IAgencyRequestDeleteParams extends Pick<IAgencyEntity, "id"> {}
/**
 * Типы основной сущности. Конец.
 */
