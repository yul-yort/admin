import { IAdminEntity } from "../../../../../data/Admin/entity/types";

export interface IAppBar {
  openDrawer: () => void;
  title?: string;
  admin: IAdminEntity | null;
}
