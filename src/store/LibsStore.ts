import { ILibs, IStoreLibs } from "./types";
import { IApi, Fetcher } from "../libs/api";
import { baseUrl } from "../common";

export class LibsStore implements IStoreLibs {
  private libs: ILibs = {};

  get api(): IApi {
    if (this.libs.api) {
      return this.libs.api;
    }

    this.libs.api = new Fetcher(baseUrl);

    return this.libs.api;
  }
}
