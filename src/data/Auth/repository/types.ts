import { IAuthServiceParams } from "../service/types";

export interface IAuthRepository {
  signIn: (data: IAuthServiceParams) => Promise<void>;
}
