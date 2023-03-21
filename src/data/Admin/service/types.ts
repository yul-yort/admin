import { IFormValues } from "src/view/UI/pages/login/types";
import { IAdminEntity } from "../entity/types";

export interface IAdminService {
  getAdmin: () => Promise<IAdminEntity>;
  login(data: IFormValues): Promise<void>;
  logout(): Promise<void>;
}
