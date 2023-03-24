import { IApi, IMethodArgs } from "../libs/api/types";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../router/types";
import { httpErrorHandler } from "./decorators";
import { EEndpoints } from "../common";

export class BaseRepository {
  constructor(protected api: IApi, public router: Router<IDependencies>) {}

  @httpErrorHandler()
  async execute<T, Q = void>(
    method: keyof IApi,
    endpoint: EEndpoints,
    args: IMethodArgs<Q> = {}
  ) {
    return await this.api[method]<T, Q>(endpoint, args);
  }
}
