import { baseUrl, EEndpoints } from "../../constants";
import { IApi } from "./types";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types";

export class Api implements IApi {
  private _headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  };

  constructor(private router: Router<IDependencies>) {}

  async get<R, P = undefined>(path: EEndpoints, params?: P): Promise<R> {
    const url = new URL(path, baseUrl);

    url.search = new URLSearchParams(params as never).toString();
    const fullUrl = url.toString();

    const response = await fetch(fullUrl, {
      credentials: "include",
    });

    if (!response.ok) {
      this.errorHandler(await response.text());
    }

    return await response.json();
  }

  async post<R, P>(path: EEndpoints, params?: P): Promise<R> {
    const url = new URL(path, baseUrl).toString();

    const response = await fetch(url, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      this.errorHandler(await response.text());
    }

    return await response.json();
  }

  async delete<R, P>(path: EEndpoints, params?: P): Promise<R> {
    const url = new URL(path, baseUrl);
    url.search = new URLSearchParams(params as never).toString();
    const fullUrl = url.toString();

    const response = await fetch(fullUrl, {
      method: "DELETE",
    });

    if (!response.ok) {
      this.errorHandler(await response.text());
    }

    return await response.json();
  }

  errorHandler(response: string): void {
    if (JSON.parse(response).status === 401) {
      this.router.navigate("login");
    }

    throw Error(response);
  }
}
