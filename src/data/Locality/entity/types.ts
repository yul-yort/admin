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
  coordinates?: [Latitude, Longitude];
}

/** Широта */
export type Latitude = string;
/* Долгота */
export type Longitude = string;

export type ILocalityDTO = ILocalityEntity;
