import { IApi } from "../libs/api/types";

export class BaseRepository {
  constructor(protected api: IApi) {}
}
