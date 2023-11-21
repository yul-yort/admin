import { Auth } from "firebase/auth";

export interface IAuthServiceParams {
  auth: Auth;
  email: string;
  password: string;
}

export interface IAuthService {
  singIn: (params: IAuthServiceParams) => Promise<void>;
}
