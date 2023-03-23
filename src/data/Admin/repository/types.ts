import { IFormValues } from "src/view/UI/pages/login/types";
import { IAdminEntity } from "../entity/types";

export interface IToken {
  access_token: string;
  admin: IAdminEntity;
}

export interface IAdminRepository {
  getAdmin: () => Promise<IAdminEntity>;
  login: (data: IFormValues) => Promise<void>;
  logout: () => Promise<void>;
}
