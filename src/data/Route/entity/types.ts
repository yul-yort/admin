import { ILocalityEntity } from "../../Locality/entity/types";

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

export type IRouteDTO = IRouteEntity;
