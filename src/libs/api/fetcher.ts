import queryString from "query-string";
import urlJoin from "url-join";

import {
  EHttpMethod,
  IApi,
  IFetcherConfig,
  IMethodArgs,
  TErrorHook,
  TResponseHook,
} from "./types";
import { EEndpoints } from "../../common";

const defaultConfig: IFetcherConfig = {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  },
};

class Fetcher implements IApi {
  private _errorHooks: TErrorHook[] = [];
  private _responseHooks: TResponseHook[] = [];
  private _getUrl<Q>(endpoint: EEndpoints, args?: IMethodArgs<Q>): string {
    const query = args?.query;
    const param = args?.param || "";
    const url = urlJoin(this._baseUrl, endpoint, param.toString());

    if (query) {
      return `${url}?${queryString.stringify(query)}`;
    }

    return url;
  }

  private _errorHandler = (error: unknown, url: string) => {
    for (const hook of this._errorHooks) {
      hook({ error, url });
    }

    throw error;
  };

  private async _request<R, Q = undefined>(
    method: EHttpMethod,
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    // try catch?
    const body = args?.body;
    const url = this._getUrl<Q>(endpoint, args);

    const requestConfig: RequestInit = {
      ...this._config,
      method,
    };

    if (body) {
      requestConfig.body = JSON.stringify(body);
    }

    const response = await fetch(url, requestConfig);

    const responseJSON = (await response.text()) || "{}";

    if (!response.ok) {
      this._errorHandler(new Error(responseJSON), url);
    }

    const parsedResponse = JSON.parse(responseJSON);

    for (const hook of this._responseHooks) {
      hook({ response: parsedResponse, url });
    }

    return parsedResponse;
  }

  constructor(
    private _baseUrl: string,
    private _config: IFetcherConfig = defaultConfig
  ) {}

  async post<R, Q = undefined>(
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    return await this._request<R, Q>(EHttpMethod.POST, endpoint, args);
  }

  async get<R, Q = undefined>(
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    return await this._request<R, Q>(EHttpMethod.GET, endpoint, args);
  }

  async delete<R, Q = undefined>(
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    return await this._request<R, Q>(EHttpMethod.DELETE, endpoint, args);
  }

  async patch<R, Q = undefined>(
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    return await this._request<R, Q>(EHttpMethod.PATCH, endpoint, args);
  }

  useErrorHook(hook: TErrorHook): void {
    this._errorHooks.push(hook);
  }

  useResponseHook<R>(hook: TResponseHook<R>): void {
    this._responseHooks.push(hook);
  }

  destroy(): void {
    this._baseUrl = "";
    this._config = {};
    this._errorHooks = [];
  }
}

export { Fetcher };
export default Fetcher;
