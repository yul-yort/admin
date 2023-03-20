import { IAdminRepository } from "./types";
import { CONSTANTS, EEndpoints } from "src/constants";
import { BaseRepository } from "src/data/BaseRepository";
import { IFormValues } from "src/view/UI/pages/login/types";
import { IAdminResponseDTO } from "../entity/types";

export class AdminRepository
  extends BaseRepository
  implements IAdminRepository
{
  async login(data: IFormValues): Promise<void> {
    const result: any = await this.api.post({
      endpoint: EEndpoints.LOGIN,
      body: { email: data.login, password: data.password },
    });

    localStorage.setItem(CONSTANTS.tokenKey, result.access_token);
  }

  async logout(): Promise<void> {
    await this.api.post({ endpoint: EEndpoints.LOGOUT });
  }

  getAdmin(): Promise<IAdminResponseDTO> {
    return this.api.get<IAdminResponseDTO>({
      endpoint: EEndpoints.ADMINS_PROFILE,
    });
  }
}
