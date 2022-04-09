import { IBaseVM } from "../types";

import { IUserEntity } from "../../../data/entities/User/types";

export interface IUserVM extends IBaseVM {
  user: IUserEntity | null;

  login: () => Promise<void>;
}
