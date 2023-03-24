import { IAdminRepository, IToken } from "./types";
import { CONSTANTS, EEndpoints } from "src/common";
import { BaseRepository } from "src/data/BaseRepository";
import { IFormValues } from "src/view/UI/pages/login/types";
import { IAdminResponseDTO } from "../entity/types";

export class AdminRepository
  extends BaseRepository
  implements IAdminRepository
{
  async login(data: IFormValues): Promise<IToken> {
    const tokenData: IToken = await this.execute("post", EEndpoints.LOGIN, {
      body: { email: data.login, password: data.password },
    });

    const { admin } = tokenData;

    const adminPublicData = {
      id: admin.id,
      firstName: admin.firstName,
      lastName: admin.lastName,
    };

    localStorage.setItem(
      CONSTANTS.publicAdminInfoKey,
      JSON.stringify(adminPublicData)
    );

    return tokenData;
  }

  async logout(): Promise<void> {
    await this.execute("post", EEndpoints.LOGOUT);
    localStorage.removeItem(CONSTANTS.publicAdminInfoKey);
  }

  async getAdmin(): Promise<IAdminResponseDTO> {
    return await this.execute<IAdminResponseDTO>(
      "get",
      EEndpoints.ADMINS_PROFILE
    );
  }
}
