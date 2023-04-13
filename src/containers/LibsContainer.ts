import { Router } from "router5";
import { ILibs, ILibsContainer } from "./types";
import { IFetcher, Fetcher } from "../libs/fetcher";
import { baseUrl } from "../common";
import { IDependencies } from "../libs/router/types";
import createAppRouter from "../libs/router";
import routes from "../libs/router/routes";

export class LibsContainer implements ILibsContainer {
  private libs: ILibs = {};

  destroy() {
    this.libs.fetcher?.destroy();
    this.libs.router?.stop();

    this.libs = {};
  }

  get fetcher(): IFetcher {
    if (this.libs.fetcher) {
      return this.libs.fetcher;
    }

    this.libs.fetcher = new Fetcher(baseUrl);

    return this.libs.fetcher;
  }

  get router(): Router<IDependencies> {
    if (this.libs.router) {
      return this.libs.router;
    }

    this.libs.router = createAppRouter(routes);

    return this.libs.router;
  }
}
