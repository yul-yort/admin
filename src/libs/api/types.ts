import { EEndpoints } from "../../common";

export interface IMethodArgs<Q> {
  param?: number | string;
  query?: Q;
  body?: Q;
}

export interface IDefaultConfig {
  credentials: RequestCredentials;
  headers: HeadersInit;
}

export interface IApi {
  /**
   * Метод для получения данных.
   */
  get<R, Q = undefined>(endpoint: EEndpoints, args: IMethodArgs<Q>): Promise<R>;

  /**
   * Метод для записи новых данных.
   */
  post<R, Q = undefined>(
    endpoint: EEndpoints,
    args: IMethodArgs<Q>
  ): Promise<R>;

  /**
   * Метод для изменения существующих данных.
   */
  patch<R, Q = undefined>(
    endpoint: EEndpoints,
    args: IMethodArgs<Q>
  ): Promise<R>;

  /**
   * Метод для удаления данных.
   */
  delete<R, Q = undefined>(
    endpoint: EEndpoints,
    args: IMethodArgs<Q>
  ): Promise<R>;
}

export enum EHttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
