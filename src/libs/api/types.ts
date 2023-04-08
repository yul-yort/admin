import { EEndpoints } from "../../common";

export interface IApi {
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

export interface IErrorHandlerRequestMeta<Q> {
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
interface IErrorHookArgs<E> {
  error?: E;
  url?: string;
}

/**
 * Интерфейс аргументов хука обработки ответа.
 */
interface IResponseHookArgs<R> {
  response?: R;
  url?: string;
}

export type TErrorHook = <E = unknown>({
  error,
  url,
}: IErrorHookArgs<E>) => void;

export type TResponseHook<R = unknown> = ({
  response,
  url,
}: IResponseHookArgs<R>) => void;

export type TRequestHook = <R = void>(response: R, endpoint?: EEndpoints) => R;
