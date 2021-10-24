import { SubmitHandler } from "react-hook-form";

/**
 * Компонент поиска маршрутов.
 */
export interface ISearchForm {
  /** Минифицированный вариант. */
  minified?: boolean;
  /** Признак загрузки. */
  loading?: boolean;
  /** Пункт отбытия. */
  origin?: string;
  /** Пункт назначения. */
  destination?: string;
  /** Стили. */
  className?: string;
  /** Метод поиска. */
  onSearch: SubmitHandler<IFormData>;
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

export interface IFormData
  extends Required<Pick<ISearchForm, "origin" | "destination">> {}
