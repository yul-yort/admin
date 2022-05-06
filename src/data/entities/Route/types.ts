import { ILocalityEntity } from "../Locality/types";

/**
 * Сущность маршрута.
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
