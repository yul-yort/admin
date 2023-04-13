import { IAdminRepository } from "./types";
import { EEndpoints } from "src/common";
import { BaseRepository } from "src/data/BaseRepository";
import { IFormValues } from "src/view/UI/pages/login/types";
import { IAdminResponseDTO } from "../entity/types";

export class AdminRepository
  extends BaseRepository
  implements IAdminRepository
{
  async login(data: IFormValues): Promise<void> {
    await this.fetcher.post(EEndpoints.LOGIN, {
      body: { email: data.login, password: data.password },
    });
  }

  async logout(): Promise<void> {
    await this.fetcher.post(EEndpoints.LOGOUT);
  }

  async getAdmin(): Promise<IAdminResponseDTO> {
    return await this.fetcher.get<IAdminResponseDTO>(EEndpoints.ADMINS_PROFILE);
  }
}
