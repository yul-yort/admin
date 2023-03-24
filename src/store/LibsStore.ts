import { ILibs, IStoreLibs } from "./types";
import { Api } from "../libs/api";
import { IApi } from "../libs/api/types";

export class LibsStore implements IStoreLibs {
  private libs: ILibs = {};

  get api(): IApi {
    if (this.libs.api) {
      return this.libs.api;
    }

    this.libs.api = new Api();

    return this.libs.api;
  }
}
