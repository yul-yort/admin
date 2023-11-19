import { IFormValues } from "src/view/UI/pages/login/types";
import { Auth } from "firebase/auth";

export interface IAuthServiceParams extends IFormValues {
  auth: Auth;
}

export interface IAuthService {
  singIn: (params: IAuthServiceParams) => Promise<void>;
}
