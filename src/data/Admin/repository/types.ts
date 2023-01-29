import { IFormValues } from "src/view/UI/pages/login/types";

export interface IAdminRepository {
  login: (data: IFormValues) => Promise<void>;
  logout: () => Promise<void>;
}
