import { IUserRepository } from "./types";
import { EEndpoints } from "../../../constants/Endpoints";
import { BaseRepository } from "src/data/BaseRepository";

export class UserRepository extends BaseRepository implements IUserRepository {
  async login(): Promise<void> {
    await this.api.post(EEndpoints.LOGIN);
  }
  async logout(): Promise<void> {
    await this.api.post(EEndpoints.LOGOUT);
  }
}
