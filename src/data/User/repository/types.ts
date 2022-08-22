import { IFormValues } from "src/view/UI/pages/login/types";

export interface IUserRepository {
  login: (data: IFormValues) => Promise<void>;
  logout: () => Promise<void>;
}
