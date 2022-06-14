import { IApi } from "../libs/api/types";

export abstract class BaseRepository {
  constructor(protected api: IApi) {}
}
