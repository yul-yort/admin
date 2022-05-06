import { SubmitHandler } from "react-hook-form";

/**
 * Компонент поиска маршрутов.
 */
export interface ISearchForm extends IFormData {
  /** Минифицированный вариант. */
  minified?: boolean;
  /** Признак загрузки. */
  loading?: boolean;
  /** Стили. */
  className?: string;
  /** Метод поиска. */
  onSearch: SubmitHandler<IFormData>;
  /** Метод сброса поиска. */
  onReset?: () => void;
}

/**
 * Компонент формы поиска маршрута.
 */
export interface IForm extends ISearchForm {
  /** Обработчик клика по кнопке изменения маршрута в минифицированном виде. */
  onExpand: () => void;
}

/**
 * Компонент минифицированной формы поиска маршрута.
 */
export interface IMinifiedForm extends Omit<ISearchForm, "onSearch"> {
  /** Обработчик клика по кнопке изменения маршрута в минифицированном виде. */
  onExpand: () => void;
}

export interface IFormData {
  /** Пункт отбытия. */
  origin?: string;
  /** Пункт назначения. */
  destination?: string;
}
