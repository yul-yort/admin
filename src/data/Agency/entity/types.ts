/**
 * Типы элементов списка. Начало.
 */
export interface IAgencyItemEntity {
  id: ID;
  agencyName: string;
  phones?: string[];
  createDate: string;
  editedDate?: string;
}

export interface IAgencyItemResponseDTO
  extends Pick<IAgencyItemEntity, "id" | "agencyName" | "phones"> {
  createDate: number;
}
/**
 * Типы элементов списка. Конец.
 */

/**
 * Типы основной сущности. Начало.
 */
export interface IAgencyEntity extends IAgencyItemEntity {
  description?: string;
}

export interface IAgencyResponseDTO
  extends Omit<IAgencyEntity, "createDate" | "editedDate"> {
  createDate: number;
  editedDate?: number;
}

export type IAgencyRequestParams = Pick<IAgencyEntity, "id">;

export interface IAgencyRequestEditParams
  extends Pick<IAgencyEntity, "id" | "agencyName" | "phones" | "description"> {
  editedDate: number;
}

export interface IAgencyRequestCreateParams
  extends Pick<IAgencyEntity, "agencyName" | "phones" | "description"> {
  createDate: number;
}

export type IAgencyRequestDeleteParams = Pick<IAgencyEntity, "id">;
/**
 * Типы основной сущности. Конец.
 */
