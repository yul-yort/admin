import { ILibs, IStoreLibs } from "./types";
import { Api } from "../libs/api";
import { IDependencies } from "../router/types";
import { Router } from "router5/dist/types/router";

export class LibsStore implements IStoreLibs {
  private libs: ILibs = {};

  constructor(private router: Router<IDependencies>) {}

  get api() {
    if (this.libs.api) {
      return this.libs.api;
    }

    this.libs.api = new Api(this.router);

    return this.libs.api;
  }
}
