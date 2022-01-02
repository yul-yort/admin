import { baseUrl, EEndpoints } from "../../constants/Endpoints";
import { IApi } from "./types";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types";

export class Api implements IApi {
  constructor(private router: Router<IDependencies>) {}

  async get<R, P = undefined>(path: EEndpoints, params?: P): Promise<R> {
    const url = new URL(path, baseUrl);

    url.search = new URLSearchParams(params as any).toString();
    const fullUrl = url.toString();

    const response = await fetch(fullUrl);

    if (!response.ok) {
      this.errorHandler(response);
    }

    return await response.json();
  }

  async post<R, P>(path: EEndpoints, params?: P): Promise<R> {
    const url = new URL(path, baseUrl).toString();

    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      this.errorHandler(response);
    }

    return await response.json();
  }

  errorHandler(response: Response) {
    if (response.status === 401) {
      this.router.navigate("login");
    }

    throw Error(response.status + " " + response.statusText);
  }
}
