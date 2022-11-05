import { IUserEntity } from "../../../../../data/User/entity/types";

export interface IAppBar {
  openDrawer: () => void;
  title?: string;
  user: IUserEntity | null;
}
