import { ILocalityEntity } from "../Locality/types";

/**
 * Сущность населенного пункта.
 */
export interface IRouteEntity {
  /**
   * Идентификатор.
   */
  id: ID;
  /**
   * Пункт отправления.
   */
  origin: ILocalityEntity;
  /**
   * Пункт назначения.
   */
  destination: ILocalityEntity;
  /**
   * Промежуточные пункты.
   */
  waypoints?: ILocalityEntity[];
}

export interface IRouteDTO extends IRouteEntity {}
