import urlJoin from "url-join";
import queryString from "query-string";

import { baseUrl, EEndpoints, HTTPRequestError } from "../../common";
import { EHttpMethod, IApi, IDefaultConfig, IMethodArgs } from "./types";
import { IResponseError } from "../../common/exeptions/types";

export class Api implements IApi {
  private get defaultConfig(): IDefaultConfig {
    return {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    };
  }

  private async errorHandler(response: Response): Promise<never> {
    const responseJSON = await response.text();
    const responseObj: IResponseError = JSON.parse(responseJSON);

    throw new HTTPRequestError(responseObj);
  }

  private getUrl<Q>(endpoint: EEndpoints, args: IMethodArgs<Q>): string {
    const { query, param = "" } = args;
    const url = urlJoin(baseUrl, endpoint, param.toString());

    if (query) {
      return `${url}?${queryString.stringify(query)}`;
    }

    return url;
  }

  private async request<R, Q = undefined>(
    method: EHttpMethod,
    endpoint: EEndpoints,
    { body, ...args }: IMethodArgs<Q>
  ): Promise<R> {
    const url = this.getUrl<Q>(endpoint, args);
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 30000); // 30 seconds timeout

    const response = await fetch(url, {
      ...this.defaultConfig,
      method,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      await this.errorHandler(response);
    }

    const responseText = (await response.text()) || "{}";

    return JSON.parse(responseText);
  }

  async get<R, Q = undefined>(
    endpoint: EEndpoints,
    args: IMethodArgs<Q>
  ): Promise<R> {
    return this.request<R, Q>(EHttpMethod.GET, endpoint, args);
  }

  async post<R, Q = undefined>(
    endpoint: EEndpoints,
    args: IMethodArgs<Q>
  ): Promise<R> {
    return this.request<R, Q>(EHttpMethod.POST, endpoint, args);
  }

  async patch<R, Q = undefined>(
    endpoint: EEndpoints,
    args: IMethodArgs<Q>
  ): Promise<R> {
    return this.request<R, Q>(EHttpMethod.PATCH, endpoint, args);
  }

  async delete<R, Q = undefined>(
    endpoint: EEndpoints,
    args: IMethodArgs<Q>
  ): Promise<R> {
    return this.request<R, Q>(EHttpMethod.DELETE, endpoint, args);
  }
}
