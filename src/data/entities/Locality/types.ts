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
}

export interface ILocalityDTO extends ILocalityEntity {}
