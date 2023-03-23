import { EEndpoints } from "../../constants";

export interface IMethodArgs<Q> {
  endpoint: EEndpoints;
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

export enum EHttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
