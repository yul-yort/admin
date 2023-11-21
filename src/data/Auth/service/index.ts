import { IAuthRepository } from "../repository/types";
import { IAuthService, IAuthServiceParams } from "./types";

export class AuthService implements IAuthService {
  constructor(private repository: IAuthRepository) {}

  async singIn(params: IAuthServiceParams): Promise<void> {
    await this.repository.signIn(params);
  }
}
