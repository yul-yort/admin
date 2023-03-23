import { IAdminRepository, IToken } from "./types";
import { CONSTANTS, EEndpoints } from "src/constants";
import { BaseRepository } from "src/data/BaseRepository";
import { IFormValues } from "src/view/UI/pages/login/types";
import { IAdminResponseDTO } from "../entity/types";

export class AdminRepository
  extends BaseRepository
  implements IAdminRepository
{
  async login(data: IFormValues): Promise<void> {
    const { admin }: IToken = await this.api.post({
      endpoint: EEndpoints.LOGIN,
      body: { email: data.login, password: data.password },
    });

    const adminPublicData = {
      id: admin.id,
      firstName: admin.firstName,
      lastName: admin.lastName,
    };

    localStorage.setItem(
      CONSTANTS.publicAdminInfoKey,
      JSON.stringify(adminPublicData)
    );
  }

  async logout(): Promise<void> {
    await this.api.post({ endpoint: EEndpoints.LOGOUT });
    localStorage.removeItem(CONSTANTS.publicAdminInfoKey);
  }

  getAdmin(): Promise<IAdminResponseDTO> {
    return this.api.get<IAdminResponseDTO>({
      endpoint: EEndpoints.ADMINS_PROFILE,
    });
  }
}
