import { IBaseVM } from "../types";
import { IFormValues } from "src/view/UI/pages/login/types";

import { IAdminEntity } from "../../../data/Admin/entity/types";

export interface IAdminVM extends IBaseVM {
  admin: IAdminEntity | null;
  authorized: boolean;

  login: (data: IFormValues) => Promise<void>;
  logout: () => Promise<void>;
}
