/**
 * Типы элементов списка. Начало.
 */
export interface IAgencyItemEntity {
  id: ID;
  agencyName: string;
  phones?: string[];
  createDate: Date;
}

export interface IAgencyItemResponseDTO
  extends Pick<IAgencyItemEntity, "id" | "agencyName" | "phones"> {
  createDate: string;
}
/**
 * Типы элементов списка. Конец.
 */

/**
 * Типы основной сущности. Начало.
 */
export interface IAgencyEntity extends IAgencyItemEntity {
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
/**
 * Типы основной сущности. Конец.
 */
