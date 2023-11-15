import { EEndpoints } from "../../constants";

export interface IMethodArgs<Q> {
  endpoint: EEndpoints;
  params?: Record<string, string | number>;
  query?: Q;
  body?: Q;
}

export interface IApi {
  /**
   * Метод для получения данных.
   */
  get<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R>;
  /**
   * Метод для записи новых данных.
   */
  post<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R>;
  /**
   * Метод для изменения существующих данных.
   */
  patch<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R>;
  /**
   * Метод для удаления данных.
   */
  delete<Q>(args: IMethodArgs<Q>): Promise<void>;
}
