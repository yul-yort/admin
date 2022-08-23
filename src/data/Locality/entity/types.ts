/** Широта */
export type TLocalityLatitude = string;
/** Долгота */
export type TLocalityLongitude = string;

export type TLocalityCoordinates = [TLocalityLatitude, TLocalityLongitude];

/**
 * Сущность населенного пункта.
 */
export interface ILocalityEntity {
  /**
   * Идентификатор.
   */
  id: ID;
  /**
   * Название.
   */
  name: string;
  /**
   * Описание.
   */
  description?: string;
  /**
   * Регион
   */
  region?: string;
  /**
   * Район
   */
  district?: string;
  /**
   * координаты
   */
  coordinates?: TLocalityCoordinates;
}

export interface ILocalityDTO extends Omit<ILocalityEntity, "id"> {
  _id: string;
}

export type ILocalityCreateParamsReq = Pick<
  ILocalityEntity,
  "name" | "description" | "region" | "district" | "coordinates"
>;

export type ILocalityEditParamsReq = Pick<
  ILocalityEntity,
  "id" | "name" | "description" | "region" | "district" | "coordinates"
>;

export type ILocalityDeleteParamsReq = Pick<ILocalityEntity, "id">;
