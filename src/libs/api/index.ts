import { baseUrl } from "../../constants";
import { IApi, IMethodArgs } from "./types";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types";

export class Api implements IApi {
  private _headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  };

  private errorHandler(response: string): void {
    if (JSON.parse(response).status === 401) {
      this.router.navigate("login");
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
      headers: this._headers,
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
      headers: this._headers,
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
      headers: this._headers,
    });

    if (!response.ok) {
      this.errorHandler(await response.text());
    }
  }
}
