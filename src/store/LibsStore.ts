import { ILibs, IStoreLibs } from "./types";
import { Api } from "../libs/api";

export class LibsStore implements IStoreLibs {
  private libs: ILibs = {};

  get api() {
    if (this.libs.api) {
      return this.libs.api;
    }

    this.libs.api = new Api();

    return this.libs.api;
  }
}
