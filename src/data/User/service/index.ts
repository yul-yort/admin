import { IFormValues } from "src/view/UI/pages/login/types";
import { IUserRepository } from "../repository/types";
import { IUserService } from "./types";

export class UserService implements IUserService {
  constructor(private repository: IUserRepository) {}

  async login(data: IFormValues): Promise<void> {
    await this.repository.login(data);
  }

  async logout(): Promise<void> {
    await this.repository.logout();
  }
}
