import urlJoin from "url-join";
import queryString from "query-string";
import { Router } from "router5/dist/types/router";

import { baseUrl, CONSTANTS } from "../../constants";
import { EHttpMethod, IApi, IDefaultConfig, IMethodArgs } from "./types";
import { IDependencies } from "../../router/types";

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

  private removeAdminDateFromLocalStorage(): void {
    localStorage.removeItem(CONSTANTS.publicAdminInfoKey);
  }

  private errorHandler(response: string): never {
    const responseObj = JSON.parse(response);

    if (
      responseObj &&
      (responseObj.statusCode === 401 || responseObj.status === 401)
    ) {
      this.removeAdminDateFromLocalStorage();

      const routerState = this.router.getState();

      this.router.navigate("login", {
        redirectName: routerState.name,
        redirectParams: JSON.stringify(routerState.params),
      });
    }

    throw new Error(response);
  }

  private getUrl<Q>(args: IMethodArgs<Q>): string {
    const { endpoint, query, param = "" } = args;
    const url = urlJoin(baseUrl, endpoint, param.toString());

    if (query) {
      return `${url}?${queryString.stringify(query)}`;
    }

    return url;
  }

  constructor(private router: Router<IDependencies>) {}

  private async request<R, Q = undefined>(
    method: EHttpMethod,
    { body, ...args }: IMethodArgs<Q>
  ): Promise<R> {
    const url = this.getUrl<Q>(args);
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
      this.errorHandler(await response.text());
    }

    const responseText = (await response.text()) || "{}";

    return JSON.parse(responseText);
  }

  async get<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R> {
    return this.request<R, Q>(EHttpMethod.GET, args);
  }

  async post<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R> {
    return this.request<R, Q>(EHttpMethod.POST, args);
  }

  async patch<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R> {
    return this.request<R, Q>(EHttpMethod.PATCH, args);
  }

  async delete<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R> {
    return this.request<R, Q>(EHttpMethod.DELETE, args);
  }
}
