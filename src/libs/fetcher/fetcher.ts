import queryString from "query-string";
import urlJoin from "url-join";

import {
  EHttpMethod,
  IFetcher,
  IFetcherConfig,
  IMethodArgs,
  IRequestMeta,
  TErrorHook,
  TResponseHook,
} from "./types";
import { EEndpoints, HTTPError } from "../../common";

const defaultConfig: IFetcherConfig = {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  },
};

class Fetcher implements IFetcher {
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

  private _errorHandler = <Q>(
    error: HTTPError,
    url: string,
    params: IRequestMeta<Q>
  ) => {
    for (const hook of this._errorHooks) {
      hook({ error, url, params });
    }

    throw error;
  };

  private async _request<R, Q = undefined>({
    method,
    endpoint,
    args,
  }: IRequestMeta<Q>): Promise<R> {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let responseObj: any;

    const textResponse = await response.text();

    if (textResponse.length) {
      responseObj = JSON.parse(textResponse);
    }

    if (!response.ok) {
      this._errorHandler<Q>(
        new HTTPError(responseObj.statusCode, responseObj.message),
        url,
        {
          method,
          endpoint,
          args,
        }
      );
    }

    for (const hook of this._responseHooks) {
      hook({ response: responseObj, url });
    }

    return responseObj as R;
  }

  constructor(
    private _baseUrl: string,
    private _config: IFetcherConfig = defaultConfig
  ) {}

  async post<R, Q = undefined>(
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    return await this._request<R, Q>({
      method: EHttpMethod.POST,
      endpoint,
      args,
    });
  }

  async get<R, Q = undefined>(
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    return await this._request<R, Q>({
      method: EHttpMethod.GET,
      endpoint,
      args,
    });
  }

  async delete<R, Q = undefined>(
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    return await this._request<R, Q>({
      method: EHttpMethod.DELETE,
      endpoint,
      args,
    });
  }

  async patch<R, Q = undefined>(
    endpoint: EEndpoints,
    args?: IMethodArgs<Q>
  ): Promise<R> {
    return await this._request<R, Q>({
      method: EHttpMethod.PATCH,
      endpoint,
      args,
    });
  }

  useErrorHook(hook: TErrorHook): void {
    this._errorHooks.push(hook);
  }

  useResponseHook(hook: TResponseHook): void {
    this._responseHooks.push(hook);
  }

  destroy(): void {
    this._baseUrl = "";
    this._config = {};
    this._errorHooks = [];
    this._responseHooks = [];
  }
}

export { Fetcher };
export default Fetcher;
