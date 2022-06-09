import { IUserRepository } from "../repository/types";
import { IUserService } from "./types";

export class UserService implements IUserService {
  constructor(private repository: IUserRepository) {}

  async login(): Promise<void> {
    await this.repository.login();
  }

  async logout(): Promise<void> {
    await this.repository.logout();
  }
}
