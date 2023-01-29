import { IFormValues } from "src/view/UI/pages/login/types";
import { IAdminRepository } from "../repository/types";
import { IAdminService } from "./types";

export class AdminService implements IAdminService {
  constructor(private repository: IAdminRepository) {}

  async login(data: IFormValues): Promise<void> {
    await this.repository.login(data);
  }

  async logout(): Promise<void> {
    await this.repository.logout();
  }
}
