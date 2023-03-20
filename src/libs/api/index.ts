import { baseUrl, CONSTANTS } from "../../constants";
import { IApi, IMethodArgs } from "./types";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types";

export class Api implements IApi {
  private getToken() {
    return localStorage.getItem(CONSTANTS.tokenKey);
  }

  private removeToken() {
    return localStorage.removeItem(CONSTANTS.tokenKey);
  }

  private getHeaders() {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    };

    const token = this.getToken();

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  }

  private errorHandler(response: string): void {
    const responseObj = JSON.parse(response);

    if (responseObj.statusCode === 401 || responseObj.status === 401) {
      this.removeToken();
      this.router.navigate("login", {}, { force: true });
    }

    throw Error(response);
  }

  private getUrl<Q>(args: IMethodArgs<Q>): string {
    const { endpoint, query, param = "" } = args;
    const url = new URL(endpoint + "/" + param, baseUrl);

    if (query) {
      url.search = new URLSearchParams(query).toString();
    }

    return url.toString();
  }

  constructor(private router: Router<IDependencies>) {}

  async get<R, Q = undefined>(args: IMethodArgs<Q>): Promise<R> {
    const url = this.getUrl<Q>(args);

    const response = await fetch(url, {
      credentials: "include",
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
      credentials: "include",
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
      credentials: "include",
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
