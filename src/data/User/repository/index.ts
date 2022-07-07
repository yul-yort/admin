import { IUserRepository } from "./types";
import { EEndpoints } from "../../../constants/Endpoints";
import { BaseRepository } from "src/data/BaseRepository";
import { IFormValues } from "src/view/UI/pages/login/types";

export class UserRepository extends BaseRepository implements IUserRepository {
  async login(data: IFormValues): Promise<void> {
    await this.api.post(EEndpoints.LOGIN, data);
  }
  async logout(): Promise<void> {
    await this.api.post(EEndpoints.LOGOUT);
  }
}
