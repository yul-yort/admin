import { IFormValues } from "src/view/UI/pages/login/types";
import { IBaseVM } from "../types";

export interface IAuthVM extends IBaseVM {
  signIn: (data: IFormValues) => void;
  logout: () => void;
  isAuth: boolean | null;
}
