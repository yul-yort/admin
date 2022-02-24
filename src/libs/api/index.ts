import { baseUrl, EEndpoints } from "../../constants/Endpoints";
import { IApi } from "./types";

export class Api implements IApi {
  async get<R, P = undefined>(path: EEndpoints, params?: P): Promise<R> {
    const url = new URL(path, baseUrl);

    url.search = new URLSearchParams(params as any).toString();
    const fullUrl = url.toString();

    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw Error(response.status + " " + response.statusText);
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
      throw Error(response.status + " " + response.statusText);
    }

    return await response.json();
  }

  async delete<R, P>(path: EEndpoints, params?: P): Promise<R> {
    const url = new URL(path, baseUrl).toString();

    let response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw Error(response.status + " " + response.statusText);
    }

    return await response.json();
  }
}
