import { EEndpoints, HTTPError } from "../../common";

export interface IFetcher {
  /**
   * Метод для получения данных.
   */
  get: TRequestMethod;

  /**
   * Метод для записи новых данных.
   */
  post: TRequestMethod;

  /**
   * Метод для изменения существующих данных.
   */
  patch: TRequestMethod;

  /**
   * Метод для удаления данных.
   */
  delete: TRequestMethod;

  /**
   * Метод для добавления хука обработки ошибок.
   * @param hook
   */
  useErrorHook: (hook: TErrorHook) => void;

  /**
   * Метод для добавления хука ответов от сервера.
   * @param hook
   */
  useResponseHook: <R>(hook: TResponseHook<R>) => void;

  destroy(): void;
}

export interface IMethodArgs<Q> {
  param?: number | string;
  query?: Q;
  body?: Q;
}

export interface IFetcherConfig {
  credentials?: RequestCredentials;
  headers?: HeadersInit;
}

export enum EHttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface IRequestMeta<Q> {
  method: EHttpMethod;
  endpoint: EEndpoints;
  args?: IMethodArgs<Q>;
}

/**
 * Тип для метода запроса.
 */
type TRequestMethod = <R, Q = undefined>(
  endpoint: EEndpoints,
  args?: IMethodArgs<Q>
) => Promise<R>;

/**
 * Интерфейс аргументов хука обработки ошибок.
 */
interface IErrorHookArgs<Q> {
  error: HTTPError;
  url: string;
  params: IRequestMeta<Q>;
}

/**
 * Интерфейс аргументов хука обработки ответа.
 */
interface IResponseHookArgs<R> {
  response: R;
  url: string;
}

export type TErrorHook = <Q>(args: IErrorHookArgs<Q>) => void;

export type TResponseHook<R = any> = (args: IResponseHookArgs<R>) => void;
