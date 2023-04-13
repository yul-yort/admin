import { IFetcher } from "../libs/fetcher";

export class BaseRepository {
  constructor(protected fetcher: IFetcher) {}
}
