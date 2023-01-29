import { IAdminRepository } from "./types";
import { EEndpoints } from "src/constants";
import { BaseRepository } from "src/data/BaseRepository";
import { IFormValues } from "src/view/UI/pages/login/types";

export class AdminRepository
  extends BaseRepository
  implements IAdminRepository
{
  async login(data: IFormValues): Promise<void> {
    await this.api.post({
      endpoint: EEndpoints.LOGIN,
      body: { email: data.login, password: data.password },
    });
  }

  async logout(): Promise<void> {
    await this.api.post({ endpoint: EEndpoints.LOGOUT });
  }
}
