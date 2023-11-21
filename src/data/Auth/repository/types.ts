import { Auth } from "firebase/auth";
import { IAuthServiceParams } from "../service/types";

export interface IAuthRepositoryParams {
  auth: Auth;
  email: string;
  password: string;
}

export interface IAuthRepository {
  signIn: (data: IAuthServiceParams) => Promise<void>;
}
