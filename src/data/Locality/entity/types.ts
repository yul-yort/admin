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

export type ILocalityDTO = ILocalityEntity;

export type ILocalityCreateParamsReq = Pick<
  ILocalityEntity,
  "name" | "description" | "region" | "district" | "coordinates"
>;
