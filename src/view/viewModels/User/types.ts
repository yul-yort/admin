import { IBaseVM } from "../types";
import { IFormValues } from "src/view/UI/pages/login/types";

import { IUserEntity } from "../../../data/User/entity/types";

export interface IUserVM extends IBaseVM {
  user: IUserEntity | null;

  login: (data: IFormValues) => Promise<void>;
  logout: () => Promise<void>;
}
