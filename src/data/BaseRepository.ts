import { IApi } from "../libs/api";

export class BaseRepository {
  constructor(protected api: IApi) {}
}
