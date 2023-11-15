import { baseUrl, CONSTANTS } from "../../constants";
import { IApi, IMethodArgs } from "./types";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types";
import { replacePlaceholders } from "./utils";

export class Api implements IApi {
  private removeToken() {
    //TODO выносить все это в Auth модуль?
    localStorage.removeItem(CONSTANTS.publicAdminInfoKey);
  }

  private getHeaders() {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      Authorization: `Bearer ${localStorage.getItem("idToken")}`,
    };
    return headers;
  }

  private errorHandler(response: string): void {
    const responseObj = JSON.parse(response);

    if (responseObj.statusCode === 401 || responseObj.status === 401) {
      this.removeToken();

      const routerState = this.router.getState();

      this.router.navigate("login", {
        redirectName: routerState.name,
        redirectParams: routerState.params,
      });
    }

    throw Error(response);
  }

  private getUrl<Q>(args: IMethodArgs<Q>): string {
    const { endpoint, query, params } = args;
    const fullEndpoint = params
      ? replacePlaceholders(endpoint, params)
      : endpoint;

    const url = new URL(fullEndpoint, baseUrl);

    if (query) {
      url.search = new URLSearchParams(query).toString();
    }

    return url.toString();
  }

  constructor(private router: Router<IDependencies>) {}

  async get<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R> {
    const url = this.getUrl<Q>(args);

    const response = await fetch(url, {
      // credentials: "include",
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      this.errorHandler(await response.text());
    }

    return await response.json();
  }

  async post<R, Q>({ body, ...args }: IMethodArgs<Q>): Promise<R> {
    const url = this.getUrl<Q>(args);

    const response = await fetch(url, {
      method: "POST",
      headers: this.getHeaders(),
      // credentials: "include",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      this.errorHandler(await response.text());
    }

    const responseText = (await response.text()) || "{}";

    return JSON.parse(responseText);
  }

  async patch<R, Q>({ body, ...args }: IMethodArgs<Q>): Promise<R> {
    const url = this.getUrl<Q>(args);

    const response = await fetch(url, {
      method: "PATCH",
      headers: this.getHeaders(),
      // credentials: "include",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      this.errorHandler(await response.text());
    }

    return await response.json();
  }

  async delete<Q>(args: IMethodArgs<Q>): Promise<void> {
    const url = this.getUrl<Q>(args);

    const response = await fetch(url, {
      method: "DELETE",
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      this.errorHandler(await response.text());
    }
  }
}
