import { IBaseVM } from "../types";

export type TTheme = "light" | "dark";

export interface IAppVM extends IBaseVM {
  theme: TTheme;

  setTheme: (theme: TTheme) => void;
}
