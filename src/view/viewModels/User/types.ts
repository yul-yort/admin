import { IBaseVM } from "../types";

import { IUserEntity } from "../../../data/User/entity/types";

export interface IUserVM extends IBaseVM {
  user: IUserEntity | null;

  login: () => Promise<void>;
  logout: () => Promise<void>;
}
